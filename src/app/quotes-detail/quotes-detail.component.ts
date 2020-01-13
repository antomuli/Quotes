import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {
@Input() quote: Quote;
@Output() isComplete = new EventEmitter<boolean>();

quoteComplete(complete:boolean){
  this.isComplete.emit(complete);
}
upvote=0;
downvote=0;

voteUp() {
  this.upvote=this.upvote+1;
}
voteDown() {
  this.downvote=this.downvote+1;
}
  constructor() { }

  ngOnInit() {
  }

}
