import { Component } from "@angular/core";
import { Quote } from "./quote";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  quotes: Quote[]=[
    new Quote(1, 'Do not go through life grow through life','Eric Butterworth', new Date(1980,3,14)),
    new Quote(2,'Life is really simple,but we insist on making it complicated','Confucius', new Date(1990,8,14)),
    new Quote(3,'Do no harm but take no shit','Moira Fowley-Doyle' ,new Date(2000,5,14)),
    new Quote(4,'Do one thing everyday that scares you','Eleanor Roosevelt', new Date(2006,7,14)),
    new Quote(5, 'Dream big work hard make it happen','Zander Creation', new Date(2008,9,14)),
    new Quote(6, 'A little progress each day adds up to big results','Jameel Mohsin', new Date(2018,12,14)),
    new Quote(7,'Strive for progress not perfection','Daniel Amen', new Date (2015,11,14)),
  ];
}
//   constructor() {
//     this.quotes = [
//       "Do not go through life,grow through life",
//       "Life is really simple,but we insist on making it complicated",
//       "Do no harm but take no shit",
//       "Do one thing everyday that scares you",
//       "Dream big work hard make it happen",
//       "A little progress each day adds up to big results",
//       "Strive for progress not perfection"
//     ];
//   }
// }
