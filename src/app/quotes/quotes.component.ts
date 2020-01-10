import { Component, OnInit } from "@angular/core";
import { Quote } from "../quote";
@Component({
  selector: "app-quotes",
  templateUrl: "./quotes.component.html",
  styleUrls: ["./quotes.component.css"]
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      1,
      "Do not go through life grow through life",
      "Eric Butterworth",
      new Date(1980, 3, 14)
    ),
    new Quote(
      2,
      "Life is really simple,but we insist on making it complicated",
      "Confucius",
      new Date(1990, 8, 14)
    ),
    new Quote(
      3,
      "Do no harm but take no shit",
      "Moira Fowley-Doyle",
      new Date(2000, 5, 14)
    ),
    new Quote(
      4,
      "Do one thing everyday that scares you",
      "Eleanor Roosevelt",
      new Date(2006, 7, 14)
    ),
    new Quote(
      5,
      "Dream big work hard make it happen",
      "Zander Creation",
      new Date(2008, 9, 14)
    ),
    new Quote(
      6,
      "A little progress each day adds up to big results",
      "Jameel Mohsin",
      new Date(2018, 12, 14)
    ),
    new Quote(
      7,
      "Strive for progress not perfection",
      "Daniel Amen",
      new Date(2015, 11, 14)
    )
  ];
  toggleDetails(index) {
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index].name}?`
      );
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  constructor() {}

  ngOnInit() {}
}
