import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'color-grid-tile',
  templateUrl: './color-grid-tile.component.html',
  styleUrls: ['./color-grid-tile.component.scss']
})
export class ColorGridTileComponent implements OnInit {

  @Input() title: string;
  @Input() colors; 

  constructor() { }

  ngOnInit() {
  }

  getBackgroundColor(htmlColor: string){
    return `${htmlColor}`;
  }

  getWidth(width: string){
    return `${width}`;
  }

}
