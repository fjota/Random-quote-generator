import { Component, OnInit } from '@angular/core';
import { Quote } from './interface/quotes.interface';
import { QoutesService } from './service/qoutes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public quote: Quote = {
    _id: '',
    quoteText: '',
    quoteAuthor: '',
    quoteGenre: '',
    __v: 0
  };

  public quotesAuthor: Quote[] = [];

  constructor(private qoutesService: QoutesService) {}

  ngOnInit() {
    this.getRandomQuote()
  }

  getRandomQuote() {
    this.qoutesService.getRandom()
    .subscribe(quoteResponse => this.quote = quoteResponse.data[0])
  }

  getAuthorQuotes() {
    this.qoutesService.getAuthorQuotes(this.quote.quoteAuthor)
    .subscribe(quoteResponse => this.quotesAuthor = quoteResponse.data)
  }
}
