import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorQuotesComponent } from './pages/author-quotes/author-quotes.component';
import { RandomQuotesComponent } from './pages/random-quotes/random-quotes.component';

const routes: Routes = [
  { path: '', component: RandomQuotesComponent, pathMatch: 'full' },
  { path: 'quotes/:author', component: AuthorQuotesComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
