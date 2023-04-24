import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import { TagsService } from '../core/services/tags.service';
import { Tag } from '../core/models/tag';

@Component({
  selector: 'app-topic-form',
  templateUrl: './topic-form.component.html',
  styleUrls: ['./topic-form.component.css'],
})
export class TopicFormComponent implements OnInit {
  faPlus = faPlus;
  faCheck = faCheck;
  // tagsList: string[] = ['question', 'discussion'];
  topicForm: FormGroup;
  newTag: string;
  tagsList: string[];

  constructor(private fb: FormBuilder, private tagsService: TagsService) {}
  ngOnInit(): void {
    this.tagsService.getTags().subscribe((t) => (this.tagsList = t));
    this.topicForm = this.fb.group({
      title: ['', Validators.required],
      content: '',
      tags: this.fb.array(this.tagsList.map(() => false)),
    });
  }

  get tags(): FormArray {
    return this.topicForm.get('tags') as FormArray;
  }

  addTag() {
    const tag = this.newTag.trim();
    if (tag) {
      this.tags.push(this.fb.control(tag));
      this.tagsList.push(tag);
      this.newTag = '';
      this.tagsService.addTag(tag);
    }
  }

  onSubmit() {
    const formValue = this.topicForm.value;
    const selectedTags = formValue.tags.filter((value: any) => value !== false);
    const topic = {
      title: formValue.title,
      content: formValue.content,
      tags: selectedTags,
    };
    console.log(topic);
  }

  onChange() {
    console.log('Change');
  }
}
