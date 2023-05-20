import { Component, OnInit } from '@angular/core';
import { TopicService } from '../../core/services/topic.service';
import { Topic } from '../../core/models/topic';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-topics-main',
  templateUrl: './topics-main.component.html',
  styleUrls: ['./topics-main.component.css'],
})
export class TopicsMainComponent implements OnInit {
  topics: Topic[];
  sort: string;
  type: string;
  query: string;

  constructor(
    private topicService: TopicService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.type = data['category'];
    });
    this.showTopics(this.type);
  }
  sortByUpvotes(): void {
    this.sort = 'upvotes';
    this.topics.sort((a: Topic, b: Topic) => b.upvotes - a.upvotes);
  }

  sortByDate(): void {
    this.sort = 'date';
    this.topics.sort((a: Topic, b: Topic) => {
      return (
        new Date(b.created_date!).getTime() -
        new Date(a.created_date!).getTime()
      );
    });
  }

  showTopics(type: string) {
    switch (type) {
      case 'tag':
        this.route.params
          .pipe(
            switchMap((params) => {
              const tagId = params['id'];
              return this.topicService.getTopicsByTag(tagId);
            })
          )
          .subscribe((res) => {
            this.topics = res;
          });

        break;
      case 'search':
        this.route.params
          .pipe(
            switchMap((params) => {
              this.query = params['query'];
              return this.topicService.getTopics(); // Assuming getTopics() returns an observable of topics
            })
          )
          .subscribe((topics) => {
            const results = [];
            for (const topic of topics) {
              if (
                topic.title.toLowerCase().includes(this.query.toLowerCase())
              ) {
                results.push(topic);
              }
              for (const tag of topic.tags) {
                if (tag.name.toLowerCase().includes(this.query.toLowerCase())) {
                  results.push(topic);
                }
              }
            }
            this.topics = results;
          });
        break;

      default:
        this.topicService.getTopics().subscribe((res) => (this.topics = res));
        break;
    }
  }
}
