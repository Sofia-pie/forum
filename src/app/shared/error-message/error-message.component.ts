import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCross } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css'],
})
export class ErrorMessageComponent implements OnInit {
  @Input() message: string;
  @Output() closed = new EventEmitter();
  isClosed: boolean = false;
  faClose = faCross;

  constructor() {}

  ngOnInit(): void {}

  close() {
    this.isClosed = true;
    this.closed.emit();
  }
}
