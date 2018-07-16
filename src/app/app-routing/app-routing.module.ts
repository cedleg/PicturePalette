import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

//Comme nous n'avons pas de module 'acceuil' nous redirigons sur l'url du composant color-extractor
const routes: Routes = [
  {
    path: '',
    redirectTo: '/images',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
