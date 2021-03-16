import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import {ArticleService} from './services/article.service';
import { ArticleCreationComponent } from './article-creation/article-creation.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'article/create', component: ArticleCreationComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: '', component: ArticlesComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    ArticleCreationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    [RouterModule.forRoot(appRoutes)]
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
