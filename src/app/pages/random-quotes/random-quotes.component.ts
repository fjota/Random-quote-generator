import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/interface/quotes.interface';
import { QoutesService } from 'src/app/service/qoutes.service';

@Component({
  selector: 'app-random-quotes',
  templateUrl: './random-quotes.component.html',
  styleUrls: ['./random-quotes.component.css']
})
export class RandomQuotesComponent implements OnInit {

  public quote: Quote = {
    _id: '',
    quoteText: '',
    quoteAuthor: '',
    quoteGenre: '',
    __v: 0
  };

  constructor(private qoutesService: QoutesService) {}

  ngOnInit() {
    this.getRandomQuote()
  }

  getRandomQuote() {
    this.qoutesService.getRandom()
    .subscribe(quoteResponse => this.quote = quoteResponse.data[0])
  }



}
