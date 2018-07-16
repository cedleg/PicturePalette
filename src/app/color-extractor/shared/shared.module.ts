import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSnackBarModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    FlexLayoutModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    FlexLayoutModule,
  ],
  declarations: []
})
export class SharedModule { }
