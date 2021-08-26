import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthorQuotesComponent } from './pages/author-quotes/author-quotes.component';
import { AppRoutingModule } from './app-routing.module';
import { RandomQuotesComponent } from './pages/random-quotes/random-quotes.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorQuotesComponent,
    RandomQuotesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
