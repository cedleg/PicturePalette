import { NgModule } from '@angular/core';
import { ColorExtractorComponent } from './color-extractor.component';
import { ImageComponent } from './image/image.component';
import { UploadComponent } from './upload/upload.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SharedModule } from './shared/shared.module';
import { ColorExtractorRoutingModule } from './color-extractor-routing/color-extractor-routing.module';
import { FormToolbarComponent } from './form-toolbar/form-toolbar.component';
import { ColorTableComponent } from './color-table/color-table.component';
import { ColorGridTileComponent } from './color-grid-tile/color-grid-tile.component';


@NgModule({
  imports: [
    ColorExtractorRoutingModule,
    SharedModule,
  ],
  declarations: [
    ColorExtractorComponent,
    ImageComponent,
    UploadComponent,
    GalleryComponent,
    ToolbarComponent,
    FormToolbarComponent,
    ColorTableComponent,
    ColorGridTileComponent,
  ],
  exports: [
    ColorExtractorComponent,
    ImageComponent,
    UploadComponent,
    GalleryComponent,
    ToolbarComponent,
    FormToolbarComponent,
    ColorTableComponent,
  ]
})
export class ColorExtractorModule { }
