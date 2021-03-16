import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Article } from '../models/article.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {


  /*@Input()
  /*Attribut optionel => cas à gérer*/
  /*title?: string;
  // tslint:disable-next-line:no-input-rename
  @Input('customContent')
  content?: string;

  readonly author: string;
  readonly website: string;*/

  @Input()
  article?: Article;

  @Output()
  deleteArticle: EventEmitter<Article> = new EventEmitter<Article>();

  constructor(private route: ActivatedRoute, private router: Router, private articleService: ArticleService) {
    /*this.title = 'Article';
    this.content = 'Content';
    this.author = 'Nicolas BOURNEUF';
    this.website = 'https://github.com/NikoB9';*/
    /*this.article = {id: -1, title: 'Article', content: 'Content', author: 'Nicolas BOURNEUF', website: 'https://github.com/NikoB9'};*/
  }

  /*on connait déjà l'id, dans l'attibut article de la classe, donc pas besoin de le passer en param*/
  delete(){

    this.route.url.subscribe(urlSegments => {
      console.log(urlSegments);
      /*Si on est dans la page de visu on enregistre et renvoie vers les articles*/
      if (`${urlSegments[0]?.path}/` === 'article/') {

        // @ts-ignore
        this.articleService.deleteArticle(this.article.id).subscribe(() => {
          this.router.navigate(['/articles']);
        });

      }
      /*Si on est dans la page des articles on utilise la fonction définie dans les articles*/
      else {

        this.deleteArticle.emit(this.article);

      }
    });

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('The id of this route is: ', params.id);
      if (params.id){
        this.articleService.getArticle(params.id).subscribe(
          (article) => {
            this.article = article;
          }
        );
      }
    });
  }

}
