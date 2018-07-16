import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../shared/models/image.model';

export interface PeriodicElem {
  html_code: string;
}

@Component({
  selector: 'color-table',
  templateUrl: './color-table.component.html',
  styleUrls: ['./color-table.component.scss']
})

export class ColorTableComponent implements OnInit {

  @Input() colorsImage: Image;

  private ELEMS_DATA: PeriodicElem[] = [
    {html_code: ''},
  ];

  displayedColumns: string[] = ['HtmlCode', 'ColorRender'];
  dataSource = this.ELEMS_DATA;

  constructor() { }

  ngOnInit() {
  }

}
