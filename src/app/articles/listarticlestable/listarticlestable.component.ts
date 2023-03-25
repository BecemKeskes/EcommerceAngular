import { Component } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticlesService } from 'src/app/services/articles.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { Categorie } from 'src/app/models/categorie';


@Component({
  selector: 'app-listarticlestable',
  templateUrl: './listarticlestable.component.html',
  styleUrls: ['./listarticlestable.component.css']
})
export class ListarticlestableComponent {
  articles:Article[]


  constructor (private artserv:ArticlesService){}
  ngOnInit(){
    this.Listart()

  }
  Listart(){
    return this.artserv.getarticles().subscribe(data =>
      this.articles=data),
      (err:any) => console.log(err)
  }
  Supparticle(id:Object){
    return this.artserv.Deletearticle(id).subscribe(data =>{this.Listart()})
  }


}
