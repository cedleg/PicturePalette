import { Component, OnInit } from '@angular/core';
import { Image } from './shared/models/image.model';
import { ImageService } from './shared/services/image.service';
import { StorageService } from './shared/services/storage.service';
import { SnackbarService } from './shared/services/snackbar.service';
import { ImageInterface } from './shared/models/image-interface.model';

@Component({
  selector: 'color-extractor',
  templateUrl: './color-extractor.component.html',
  styleUrls: ['./color-extractor.component.scss']
})
export class ColorExtractorComponent implements OnInit {

  private images: Image[];

  constructor(
    private imageService: ImageService,
    private storageService: StorageService,
    private snackbarService: SnackbarService,
  ) { }

  ngOnInit() {

    this.imageService.get().subscribe(
      async images => {
        this.images = await images;
        if(this.images.length){
          this.snackbarService.onGalleryBack();
          return;
        }
        this.snackbarService.onExtract();
        this.storageService.get().subscribe(async (images: ImageInterface[]) => {
          this.snackbarService.onExtractSucces();
          if(images){
            this.imageService.postAll(images);
          }
        });
      }
    );

  }

}
