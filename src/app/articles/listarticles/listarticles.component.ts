import { Component } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-listarticles',
  templateUrl: './listarticles.component.html',
  styleUrls: ['./listarticles.component.css']
})
export class ListarticlesComponent {
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
