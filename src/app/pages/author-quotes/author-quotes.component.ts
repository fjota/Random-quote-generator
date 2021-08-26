import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Quote } from 'src/app/interface/quotes.interface';
import { QoutesService } from 'src/app/service/qoutes.service';

@Component({
  selector: 'app-author-quotes',
  templateUrl: './author-quotes.component.html',
  styleUrls: ['./author-quotes.component.css']
})
export class AuthorQuotesComponent implements OnInit {

  public authorName: string = ''
  public quotesAuthor: Quote[] = []

  constructor(private route: ActivatedRoute, private quotesService: QoutesService) { }

  ngOnInit() {
    this.getAuthorQuotes();
  }

  getAuthorQuotes() {
    this.authorName = String(this.route.snapshot.paramMap.get('author'))

    this.quotesService.getAuthorQuotes(this.authorName)
    .subscribe(quotesResponse => this.quotesAuthor = quotesResponse.data)
  }

}
