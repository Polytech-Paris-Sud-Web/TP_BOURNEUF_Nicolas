import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Article} from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:3000/articles');
  }

  public deleteArticle(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/articles/${id}`);
  }

  public getArticle(id: number): Observable<Article> {
    return this.http.get<Article>(`http://localhost:3000/articles/${id}`);
  }

  public addArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(`http://localhost:3000/articles/`, article);
  }


}
