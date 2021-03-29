import { Quote } from '../quote';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1,'A dream without a plan is a wish','Jay Shetty','Danlon Situma',0,new Date(2021, 3, 29)),
    new Quote(2,'Pride is the burden of a foolish person','Mike Rowe','Danlon Situma',0,new Date(2021, 4, 14)),
    new Quote(3,'Your dream has to be bigger than your fear','Steve Harvey','Danlon Situma',0,new Date(2021, 3, 31)),
    new Quote(4,'I think it is possible for ordinary people to choose to be extraordinary','Elon Mask','Danlon Situma',4,new Date(2021, 6, 17)),
    new Quote(5,"If you're walking down the right path and you're willing to keep walking,eventually you'll make progress.",'Barack Obama','Danlon Situma',0,new Date(2021, 5, 21)),
  ];
  addNewQuote(quote: Quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    let today = new Date();
    quote.dateCreated = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    this.quotes.push(quote);
  }
  toggleDetails(index:any) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  deleteQuote(isComplete: boolean, index: number) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete the quote \"${this.quotes[index].quote}\"?`
      );
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  upVoteQuote(isUpVoted: boolean, index: number) {
    if (isUpVoted) {
      this.quotes[index].votes += 1;
      console.log(this.quotes[index].votes);
    }
  }

  downVoteQuote(isDownVoted: boolean, index: number) {
    if (isDownVoted) {
      this.quotes[index].votes -= 1;
    }
  }
  highestVote() {
    let prevNum = 0;
    let lastNum = 0;
    let i = 0;
    for (i = 0; i < this.quotes.length; i++) {
      lastNum = this.quotes[i].votes;
      if (lastNum > prevNum) {
        prevNum = lastNum;
      }
    }
    return prevNum;
  }

  constructor() {}

  ngOnInit(): void {}
}