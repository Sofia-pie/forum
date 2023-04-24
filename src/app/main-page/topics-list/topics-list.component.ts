import { Component, Input, OnInit } from '@angular/core';
import { TagsService } from '../../core/services/tags.service';
import { Tag } from '../../core/models/tag';
import { Topic } from '../../core/models/topic';

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.css'],
})
export class TopicsListComponent implements OnInit {
  @Input() topics: any;
  tags: string[];
  constructor(private tagsService: TagsService) {}

  ngOnInit(): void {
    this.tagsService.getTags().subscribe((t) => (this.tags = t));
  }
  sortByUpvotes(): void {
    this.topics.sort((a: Topic, b: Topic) => b.upvotes - a.upvotes);
  }
}
