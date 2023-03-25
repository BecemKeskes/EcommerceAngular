import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Categorie } from 'src/app/models/categorie';
@Component({
  selector: 'app-listcategorie',
  templateUrl: './listcategorie.component.html',
  styleUrls: ['./listcategorie.component.css']
})
export class ListcategorieComponent {
  categorie:Categorie[]
  constructor(private catserv:CategoriesService){}
  ngOnInit() {
    return this.catserv.ListCategories().subscribe(data =>
      this.categorie = data),
      (err:any)=>console.log(err)
      }
     
}
