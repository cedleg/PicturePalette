import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../models/user.model'
import { UserInterface } from '../models/user-interface.model';
import { ImageInterface } from '../models/image-interface.model';
import { Observable } from 'rxjs';
import { Image } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageApiService {

  private headers: HttpHeaders;

  constructor( private http: HttpClient) {
    //Internal consume
    this.http.get<UserInterface>("assets/config.json").subscribe(
      (data: User) => this.headers = new HttpHeaders ({
        "Authorization": "Basic " + data.token
      })
    );
  }

  post(file: File): Observable<ImageInterface> {
    //console.log(file);
    let formData = new FormData();
    formData.append("image", file);
    return this.http.post<ImageInterface>(
      "https://api.imagga.com/v1/content",
      formData,
      {headers: this.headers} 
    );

  }

  get(image: Image): Observable<ImageInterface> {
    return this.http.get<ImageInterface>(
      `https://api.imagga.com/v1/colors?content=${image.id}`,
      {headers: this.headers}
    );
  }
}
