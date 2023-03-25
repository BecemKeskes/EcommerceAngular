import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { InsertcategorieComponent } from './categories/insertcategorie/insertcategorie.component';
import { ModifcategorieComponent } from './categories/modifcategorie/modifcategorie.component';
import { ListcategorieComponent } from './categories/listcategorie/listcategorie.component';
import { ListarticlesComponent } from './articles/listarticles/listarticles.component';
import { InsertarticlesComponent } from './articles/insertarticles/insertarticles.component';
import { ModifarticlesComponent } from './articles/modifarticles/modifarticles.component';
import { ListscategorieComponent } from './scategories/listscategorie/listscategorie.component';
import { InsertscategorieComponent } from './scategories/insertscategorie/insertscategorie.component';
import { ModifscategorieComponent } from './scategories/modifscategorie/modifscategorie.component';
import { ListarticlescardComponent } from './articles/listarticlescard/listarticlescard.component';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { ListarticlestableComponent } from './articles/listarticlestable/listarticlestable.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InsertcategorieComponent,
    ModifcategorieComponent,
    ListcategorieComponent,
    ListarticlesComponent,
    InsertarticlesComponent,
    ModifarticlesComponent,
    ListscategorieComponent,
    InsertscategorieComponent,
    ModifscategorieComponent,
    ListarticlescardComponent,
    ListarticlestableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
