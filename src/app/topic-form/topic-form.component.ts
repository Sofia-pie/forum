import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-topic-form',
  templateUrl: './topic-form.component.html',
  styleUrls: ['./topic-form.component.css'],
})
export class TopicFormComponent implements OnInit {
  topicForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.topicForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: '',
    });
  }

  onSubmit() {
    console.log(this.topicForm.value);
  }
}
