import { Component, OnInit } from '@angular/core';
import { TopicService } from '../../core/services/topic.service';
import { Topic } from '../../core/models/topic';

@Component({
  selector: 'app-topics-main',
  templateUrl: './topics-main.component.html',
  styleUrls: ['./topics-main.component.css']
})
export class TopicsMainComponent implements OnInit {
  topics: Topic[];
  constructor(private topicService:TopicService) { }

  ngOnInit(): void {
    this.topicService.getTopics().subscribe((res)=>this.topics=res);
    
  }
  sortByUpvotes(): void {
    this.topics.sort((a: Topic, b: Topic) => b.upvotes - a.upvotes);
  }

  sortByDate(): void {
    this.topics.sort((a: Topic, b: Topic) => {
      return (
        new Date(b.created_date!).getTime() -
        new Date(a.created_date!).getTime()
      );
    });
  }
}
