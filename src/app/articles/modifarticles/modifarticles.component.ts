import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-modifarticles',
  templateUrl: './modifarticles.component.html',
  styleUrls: ['./modifarticles.component.css']
})
export class ModifarticlesComponent {
article: Article = new Article()
id:object
constructor(private artserv:ArticlesService, private router:Router, private route:ActivatedRoute){}
ngOnInit(){
  this.id=this.route.snapshot.params['id'];
  this.artserv.getarticlesByID(this.id).subscribe(data=>this.article=data);
}
modifarticle(){
  this.artserv.UpdateArticle(this.id,this.article).subscribe(data =>{this.router.navigate(['/listarticlestable'])})

}
}
