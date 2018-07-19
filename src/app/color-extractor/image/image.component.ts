import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageService } from '../shared/services/image.service';
import { Image } from '../shared/models/image.model';
import { DomSanitizer } from '@angular/platform-browser';
import { StorageService } from '../shared/services/storage.service';
import { ImageInterface } from '../shared/models/image-interface.model';
import { SnackbarService } from '../shared/services/snackbar.service';
import { FileGeneratorService } from '../shared/services/file-generator.service';

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  private image: Image;

  constructor(
    private router: Router,
    private active: ActivatedRoute,
    private imageService: ImageService,
    private sanitizer: DomSanitizer,
    private storageService: StorageService,
    private snackbarService: SnackbarService,
    private fileService: FileGeneratorService,
  ) { }

  ngOnInit() {
    this.findById(
      this.active.snapshot.paramMap.get("id")
    );
  }

  findById(id: string): void {
    this.imageService.findById(id).subscribe(
      async (image: Image) => await image
        ? (this.image = image)
        : this.storageById(id)
    );
  }

  storageById(id: string) {
    this.snackbarService.onExtract();
    this.storageService.get().subscribe(async (images: ImageInterface[]) => {
      if (!await images || !(this.image = images.find((image: Image) => image.id === id))) {
        this.snackbarService.onExtractError();
        this.router.navigate([`/images`]);
      }
      this.snackbarService.onExtractSucces();
    });
  }

  getBackground(src: string) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${src})`);
  }

  exportToCss() {
    this.fileService.imageToCss(this.image);
  }

}
