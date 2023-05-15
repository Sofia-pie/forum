import { Component, Input, OnInit } from '@angular/core';
import { TagsService } from '../../core/services/tags.service';
import { Tag } from '../../core/models/tag';
import { Topic } from '../../core/models/topic';
import { TopicService } from '../../core/services/topic.service';
import { CommentsService } from '../../core/services/comments.service';

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.css'],
})
export class TopicsListComponent implements OnInit {
  @Input() topics: any;
  
  constructor(private topicService: TopicService, private commentsService: CommentsService) {}

  ngOnInit(): void {
   
  }
  addComment({id, comment}:{id:string, comment:string}){
    this.commentsService.createComment(id,comment).subscribe((res)=>console.log(res));
       
  }
  
}
