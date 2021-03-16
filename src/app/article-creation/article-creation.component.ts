import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Article} from '../models/article.model';
import {ActivatedRoute, Router} from '@angular/router';
import { ArticleService } from '../services/article.service';


@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent implements OnInit {

  articleForm: FormGroup;

  @Output()
  createArticle: EventEmitter<Article> = new EventEmitter<Article>();

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private articleService: ArticleService) {
    this.articleForm = this.fb.group({
      title: ['Title', Validators.required],
      content: ['Article', Validators.required],
      author: ['Nicolas Bourneuf', Validators.required],
      website: ['https://github.com/NikoB9/', Validators.required],
    });
  }

  create(){
    this.route.url.subscribe(urlSegments => {
      console.log(urlSegments);
      /*Si on est dans la page de création on enregistre et renvoie vers l'article*/
      if (`${urlSegments[0]?.path}/${urlSegments[1]?.path}` === 'article/create'){

        this.articleService.addArticle(this.articleForm.value).subscribe( (article) => {
          /*console.log(article);*/
          this.router.navigate(['/article/', article.id]);
        });

      }
      /*Si on est dans la page des articles on utilise la fonction définie dans les articles*/
      else{

        this.createArticle.emit(this.articleForm.value);

      }
    });

  }

  ngOnInit(): void {
  }

}
