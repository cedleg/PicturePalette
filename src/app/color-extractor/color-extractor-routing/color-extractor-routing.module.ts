import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { ColorExtractorComponent } from '../color-extractor.component';
import { ImageComponent } from '../image/image.component';

const routes: Routes = [
  {
    path: 'images',
    component: ColorExtractorComponent
  },
  {
    path: 'image/:id',
    component: ImageComponent
  }
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
export class ColorExtractorRoutingModule { }
