import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import { TagsService } from '../core/services/tags.service';
import { Tag } from '../core/models/tag';
import { TopicService } from '../core/services/topic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topic-form',
  templateUrl: './topic-form.component.html',
  styleUrls: ['./topic-form.component.css'],
})
export class TopicFormComponent implements OnInit {
  faPlus = faPlus;
  faCheck = faCheck;
  topicForm: FormGroup;
  newTag: string;
  suggest: string[];
  tagsList: string[]=[];
  showDropdown = false;
  filteredSuggestions: string[] = [];
 

  constructor(private fb: FormBuilder, private tagsService: TagsService, private topicService:TopicService, private router: Router) {}
  ngOnInit(): void {
    this.tagsService.getTags().subscribe((t) => (this.suggest = t));
    this.topicForm = this.fb.group({
      title: ['', Validators.required],
      content: '',
      tags: this.fb.array([]),
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
    }
  }

  onInputChange() {
    this.showDropdown = true;
    console.log(this.newTag);
    this.filteredSuggestions = this.suggest.filter(tag => tag.includes(this.newTag));
  }

  onSelectSuggestion(suggestion: string) {
    this.newTag = suggestion;
    this.showDropdown = false;
  }

  onSubmit() {
    const formValue = this.topicForm.value;
    const selectedTags = formValue.tags.filter((value: any) => value !== false);
    const topic = {
      title: formValue.title,
      content: formValue.content,
      tags: selectedTags,
    };
    this.topicService.addTopic(topic).subscribe((res)=>{
      console.log(topic);
      this.router.navigate(['/main'])

    })
 
  }

  
}
