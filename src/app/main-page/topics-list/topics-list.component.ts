import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.css'],
})
export class TopicsListComponent implements OnInit {
  @Input() topics: any;
  constructor() {}

  ngOnInit(): void {}
}
