import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(
    public route : ActivatedRoute,
    private location: Location) {
    //console.log(this.route.routeConfig.component.name); 
    //console.log(this.route);
    //console.log(this.location);
   }

  ngOnInit() {
  }

  onBack(): void {
      this.location.back();
  }

}
