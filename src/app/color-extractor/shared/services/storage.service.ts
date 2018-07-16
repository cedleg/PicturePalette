import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Image } from '../models/image.model';
import { Observable } from 'rxjs';
import { ImageInterface } from '../models/image-interface.model';

const namespace = "color-extractor";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private localStorage: LocalStorage) {
    //console.log(this.localStorage);
   }

  get(): Observable<ImageInterface[]>{
    return this.localStorage.getItem<ImageInterface[]>(`${namespace}.images`);
  }

  post(image: Image){
    this.get().subscribe( async (images: ImageInterface[]) => {
        images = await images || [];
        images.push(image);
        this.localStorage.setItem(`${namespace}.images`, images).subscribe(() => { });
      });
  }

  remove(image: Image){
    this.get().subscribe( async (images: ImageInterface[]) => {
      images = await images || [];
      images.forEach((item, idx, array) => {
          item.src === image.src ? array.splice(idx, 1) : false;
      });
      this.localStorage.setItem(`${namespace}.images`, images).subscribe(() => { });
    });
  }

  changeFilename(image, newFileName){
    this.get().subscribe( async (images: ImageInterface[]) => {
      images = await images || [];
      images.forEach((item, idx, array) => {
          if(item.src === image.src){
            item.filename = newFileName;
            array[idx] = item;
          }
      });
      this.localStorage.setItem(`${namespace}.images`, images).subscribe(() => { });
    }); 
  }

}
