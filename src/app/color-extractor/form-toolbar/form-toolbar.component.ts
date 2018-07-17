import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Image } from '../shared/models/image.model';
import { StorageService } from '../shared/services/storage.service';
import { SnackbarService } from '../shared/services/snackbar.service';
import { ImageInterface } from '../shared/models/image-interface.model';
import { Router } from '@angular/router';
import { ImageService } from '../shared/services/image.service';

@Component({
  selector: 'form-toolbar',
  templateUrl: './form-toolbar.component.html',
  styleUrls: ['./form-toolbar.component.css']
})
export class FormToolbarComponent implements OnInit {

  @Input() image: Image;

  private filename: string;
  private formGroup: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private storageService: StorageService,
    private snackbarService: SnackbarService,
    private imageService : ImageService,

  ) {
    this.filename = "no name";
    this.formGroup = new FormGroup(
      this.formBuilder.group({
          filename: [this.filename,
            [Validators.pattern('.*[.]{1}(jpg|jpeg|png|gif|bmp)'),
             Validators.required]
          ],
        }).controls, { updateOn: "blur"}
      );

      this.formGroup.get("filename").valueChanges.subscribe(
        async (name: string) => {
          let newName = await name;
          this.setFileName(this.image, newName);
        }
      );

   }

  ngOnInit() {

  }

  setFileName(image: Image, name: string){
    this.snackbarService.onchangeFileName();
    this.storageService.get().subscribe(async (images: ImageInterface[]) => {
      if(!await images)return;
      this.storageService.changeFilename(image, name);
      this.imageService.changeFilename(image, name);
      this.snackbarService.onchangedFileName();
    });
  }

  onDeleteClick(image: Image){
    this.imageService.removeImage(image);
    this.storageService.remove(image);
    this.router.navigate([`/images`]);
  }

}
