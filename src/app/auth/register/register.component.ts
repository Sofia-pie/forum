import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  preview: string;
  errorMessage: string;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: [''],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      bio: ['', Validators.maxLength(400)],
      profilePicture: [null],
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.registerForm.controls[controlName];
    return control.touched && control.invalid;
  }

  uploadFile(event: any) {
    const file = (event?.target as HTMLInputElement)?.files?.[0];
    this.registerForm.patchValue({
      profilePicture: file,
    });
    this.registerForm.get('profilePicture')?.updateValueAndValidity();
    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
    };
    reader.readAsDataURL(file!);
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    this.userService
      .registerUser(this.registerForm.value)
      .subscribe({
        next: () => this.router.navigate(['/sign-in']),
        error: (err) => (this.errorMessage = err),
      });
  }
}
