import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../core/services/user.service';

import { Location } from '@angular/common';
import { User } from '../../core/models/user';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  userForm: FormGroup;
  preview: string;
  user: User;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      username: ['', Validators.required],
      bio: ['', Validators.maxLength(400)],
      profilePicture: [null],
    });

    this.route
      .parent!.params.pipe(
        switchMap((params) => {
          const userId = params['id'];
          return this.userService.getUser(userId);
        })
      )
      .subscribe((res) => {
        this.user = res;
        this.userForm.patchValue(res);
      });
  }

  isInvalid(controlName: string): boolean {
    const control = this.userForm.controls[controlName];
    return control.touched && control.invalid;
  }

  uploadFile(event: any) {
    const file = (event?.target as HTMLInputElement)?.files?.[0];
    this.userForm.patchValue({
      profilePicture: file,
    });
    this.userForm.get('profilePicture')?.updateValueAndValidity();
    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
    };
    reader.readAsDataURL(file!);
  }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }

    this.userService
      .editUserInfo(this.userForm.value)
      .subscribe(() => this.location.back());
  }
}
