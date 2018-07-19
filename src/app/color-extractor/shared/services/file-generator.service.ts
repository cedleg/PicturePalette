import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileGeneratorService {

  constructor() { }

  imageToCss(image) {
    let data = this.cssConverter(image);
    let file = this.setBlob(data);
    this.getDownloader(file, 'chart.css');
  }

  setBlob(data: string) {
    let file = new Blob([data], {
      type : 'text/plain'
    });

    return file
  }

  getDownloader(blob, fileName){
    let fileURL = URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.href = fileURL;
    a.target = '_blank';
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
  }

  cssConverter(image): string{
    let cssData = '';
    image.background_colors.forEach((color, key) => {
      cssData += `.background_color${key}{\n
        background: ${color.html_code};\n
      }\n`
    });

    image.foreground_colors.forEach((color, key) => {
      cssData += `.foreground_color${key}{\n
        background: ${color.html_code};\n
      }\n`
    });

    image.image_colors.forEach((color, key) => {
      cssData += `.image_color${key}{\n
        background: ${color.html_code};\n
      }\n`
    });

    return cssData;
  }
}
