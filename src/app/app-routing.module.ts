import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertarticlesComponent } from './articles/insertarticles/insertarticles.component';
import { ListarticlesComponent } from './articles/listarticles/listarticles.component';
import { ListarticlescardComponent } from './articles/listarticlescard/listarticlescard.component';
import { ListarticlestableComponent } from './articles/listarticlestable/listarticlestable.component';
import { ModifarticlesComponent } from './articles/modifarticles/modifarticles.component';
import { ListcategorieComponent } from './categories/listcategorie/listcategorie.component';
import { ListscategorieComponent } from './scategories/listscategorie/listscategorie.component';

const routes: Routes = [
{path:"listarticles",component:ListarticlesComponent},
{path:"listcategories",component:ListcategorieComponent},
{path:"listscategories",component:ListscategorieComponent},
{path:"listarticlescard",component:ListarticlescardComponent},
{path:"insertart",component:InsertarticlesComponent},
{path:"listarticlestable",component:ListarticlestableComponent},
{path:"editarticle/:id",component:ModifarticlesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
