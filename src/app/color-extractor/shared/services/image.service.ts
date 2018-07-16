import { Injectable } from '@angular/core';
import { Image } from '../models/image.model';
import { Observable, of } from 'rxjs';
import { NG_ANIMATING_CLASSNAME } from '@angular/animations/browser/src/util';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private images: Image[] = [];

  constructor() { }

  get(): Observable<Image[]>{
    return of(this.images);
  }

  post(image: Image){
    this.images.push(image);
  }

  postAll(images: Image[]): void{
    images.forEach((image: Image) => this.images.push(image)); 
  }

  findById(id: string): Observable<Image> {
    return of(
      this.images.find(image => image.id === id)
    );
  }

  findBySrc(src: string): Observable<Image>{
    return of(
      this.images.find((image: Image) => image.src === src)
    );
  }

  removeImage(image: Image){
    this.images.forEach( (item, idx, array) => {
      item == image ? array.splice(idx, 1) : false;
    })
  }

  changeFilename(image: Image, name: string){
    this.images.forEach((item, idx, array) => {
      if(item === image){
        item.filename = name;
        array[idx] = item;
      }
    });
  }

}
