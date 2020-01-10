import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  quotes: string[];

  constructor() {
    this.quotes = [
      "Do not go through life,grow through life",
      "Life is really simple,but we insist on making it complicated",
      "Do no harm but take no shit",
      "Do one thing everyday that scares you",
      "Dream big work hard make it happen",
      "A little progress each day adds up to big results",
      "Strive for progress not perfection"
    ];
  }
}
