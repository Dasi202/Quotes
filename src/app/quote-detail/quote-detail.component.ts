import { Quote } from '../quote';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css'],
})
export class QuoteDetailComponent implements OnInit {
  @Input()
  quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  @Output() isUpVote = new EventEmitter<boolean>();
  @Output() isDownVote = new EventEmitter<boolean>();

  deleteQuote(complete: boolean) {
    this.isComplete.emit(complete);
  }
  upVote(complete: boolean) {
    this.isUpVote.emit(complete);
  }
  downVote(complete: boolean) {
    this.isDownVote.emit(complete);
  }

  constructor() {}

  ngOnInit(): void {}
}