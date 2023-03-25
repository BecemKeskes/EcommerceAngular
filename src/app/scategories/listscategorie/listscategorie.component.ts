import { Component } from '@angular/core';
import { ScategorieService } from 'src/app/services/scategorie.service';
import { Scategorie } from 'src/app/models/scategorie';
@Component({
  selector: 'app-listscategorie',
  templateUrl: './listscategorie.component.html',
  styleUrls: ['./listscategorie.component.css']
})
export class ListscategorieComponent {
  scategorie:Scategorie[]
  constructor(private scatserv:ScategorieService){}
  ngOnInit(){
    return this.scatserv.ListScategories().subscribe(data => 
      this.scategorie = data),
      (err:any)=>console.log(err)
  }
}
