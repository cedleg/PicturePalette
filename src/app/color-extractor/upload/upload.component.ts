import { Component, OnInit } from '@angular/core';
import { ImageApiService } from '../shared/services/image-api.service';
import { ImageInterface } from '../shared/models/image-interface.model';
import { Image } from '../shared/models/image.model';
import { SnackbarService } from '../shared/services/snackbar.service';
import { ImageService } from '../shared/services/image.service';
import { StorageService } from '../shared/services/storage.service';


@Component({
  selector: 'upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  private reader: FileReader = new FileReader;

  constructor(
    private storageService: StorageService,
    private imageApiService: ImageApiService,
    private imageService: ImageService,
    private snackBarService: SnackbarService
  ) { }

  ngOnInit() {
  }

  onUpload(event): void {
    let input: HTMLInputElement = <HTMLInputElement>event.target;
    let file: File = input.files[0];
    this.snackBarService.onRead();

    this.reader.onload = (event) => {
      this.snackBarService.onReadSuccess();
      this.beforePost(file);
    };

    this.reader.onerror = (event) => {
      this.snackBarService.onReadError();
    };

    this.reader.readAsDataURL(file);
  }

  beforePost(file: File){
    this.imageService.findBySrc(this.reader.result).subscribe(async image => {
      await image ? this.snackBarService.onImageExists(): this.post(file);
    });
  }

  post(file: File) {
      this.snackBarService.onSubmit();
      this.imageApiService.post(file).subscribe(
        (data: ImageInterface) => { 
          this.snackBarService.onSubmitSucces();
          this.get({ ...data.uploaded[0] });
        }
      );

  }

  get(image: Image) {
    this.snackBarService.onExtract();
    this.imageApiService.get(image).subscribe(
      (data: ImageInterface) => {
        let uploaded: Image = { ...data.results[0].info }
        uploaded.id = image.id;
        uploaded.filename = image.filename;
        uploaded.src = this.reader.result;
        this.imageService.post(uploaded);
        this.storageService.post(uploaded);
        this.snackBarService.onExtractSucces();
      }
    );
  }

}
