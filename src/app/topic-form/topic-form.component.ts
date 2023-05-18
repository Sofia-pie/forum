import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import { TagsService } from '../core/services/tags.service';
import { Tag } from '../core/models/tag';
import { TopicService } from '../core/services/topic.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  tagsList: string[] = [];
  showDropdown = false;
  filteredSuggestions: string[] = [];

  constructor(
    private fb: FormBuilder,
    private tagsService: TagsService,
    private topicService: TopicService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.tagsService.getTags().subscribe((t) => (this.suggest = t));
    this.topicForm = this.fb.group({
      title: ['', Validators.required],
      content: '',
      tags: this.fb.array([]),
    });

    if (id) {
      this.topicService.getTopicById(id).subscribe((topic) => {
        console.log(topic.tags.map((t) => t.name));
        this.topicForm.patchValue({
          title: topic.title,
          content: topic.content,
        });
        const t = topic.tags.map((t) => t.name);
        if (t.length != 0) {
          t.forEach((tagName) => {
            this.tags.push(this.fb.control(tagName));
            this.tagsList.push(tagName);
          });
        }
      });
    }
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
    this.filteredSuggestions = this.suggest.filter((tag) =>
      tag.includes(this.newTag)
    );
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
    console.log(topic);
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.topicService.editTopic(id, topic).subscribe((res) => {
        console.log(topic);
        this.router.navigate(['/main']);
      });
    } else {
      this.topicService.addTopic(topic).subscribe((res) => {
        console.log(topic);
        this.router.navigate(['/main']);
      });
    }
  }
}
