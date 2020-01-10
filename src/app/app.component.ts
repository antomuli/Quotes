import { Component } from "@angular/core";
import { Quote } from './quote';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  quotes: Quote[]=[
    {id:1, name:'Do not go through life grow through life'},
    {id:2, name:'Life is really simple,but we insist on making it complicated'},
    {id:3, name:'Do no harm but take no shit'},
    {id:4, name:'Do one thing everyday that scares you'},
    {id:5, name:'Dream big work hard make it happen'},
    {id:6, name:'A little progress each day adds up to big results'},
    {id:7, name:'Strive for progress not perfection'},
  ];
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
