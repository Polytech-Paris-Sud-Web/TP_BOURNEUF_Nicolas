import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { ArticleService } from '../services/article.service';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  /*
  *   private articles : Observable<Article[]>;
  * */
  articles: Article[];

  constructor(private articleService: ArticleService) {
    this.articles = [];
  }

  delete(article: Article) {
    this.articleService.deleteArticle(article.id).subscribe( () => {
      this.getArticles();
    });
  }

  create(article: Article){
    this.articleService.addArticle(article).subscribe( (result) => {
      console.log(result);
      this.getArticles();
    });
  }

  // tslint:disable-next-line:typedef
  getArticles(){
    this.articleService.getArticles().subscribe(
      (articles) => {
        this.articles = articles;
      }
    );
  }

  ngOnInit(): void {
    this.getArticles();
  }

  /*
  *ngOnInit() {
    this.articles = this.articleService.getArticles();
  }
  * */

}
