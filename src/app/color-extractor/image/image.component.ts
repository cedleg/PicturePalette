import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageService } from '../shared/services/image.service';
import { Image } from '../shared/models/image.model';
import { DomSanitizer } from '@angular/platform-browser';
import { StorageService } from '../shared/services/storage.service';
import { ImageInterface } from '../shared/models/image-interface.model';
import { SnackbarService } from '../shared/services/snackbar.service';

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
    private snackbarService: SnackbarService
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
    //trick to download store a file having its URL
    let data = this.cssWriter(this.image);
    var file = new Blob([data], {
      type : 'text/plain'
    });
    var fileURL = URL.createObjectURL(file);
    var a = document.createElement('a');
    a.href = fileURL;
    a.target = '_blank';
    a.download = 'chart.css';
    document.body.appendChild(a);
    a.click();
  }

  cssWriter(image: Image){

    let result = 'data';
    return result;
  }
}
