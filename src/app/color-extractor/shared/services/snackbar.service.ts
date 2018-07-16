import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  onRead(){
    return this.snackBar.open("Reading data...", "", {duration: 2000});
  }

  onReadError(){
    return this.snackBar.open("Read file error!", "", {duration: 2000});
  }

  onReadSuccess(){
    return this.snackBar.open("Read file successful!", "", {duration: 2000});
  }

  onSubmit(){
    return this.snackBar.open("Submit data...");
  }

  onSubmitError(){
    return this.snackBar.open("Submit error!", "", {duration: 2000});
  }

  onSubmitSucces(){
    return this.snackBar.open("Submit successful!", "", {duration: 2000});
  }

  onExtract(){
    return this.snackBar.open("Extracting...");
  }

  onExtractError(){
    return this.snackBar.open("Extract error!", "", {duration: 2000});
  }

  onExtractSucces(){
    return this.snackBar.open("Extract successful!", "", {duration: 2000});
  }

  onGalleryBack(){
    return this.snackBar.open("Gallery", "", {duration: 2000});
  }

  onImageExists(){
    return this.snackBar.open("Find already exist", "", {duration: 2000});
  }

  onchangeFileName(){
    return this.snackBar.open("Changing filename", "", {duration: 2000});
  }
  onchangedFileName(){
    return this.snackBar.open("Filename done", "", {duration: 2000});
  }

}
