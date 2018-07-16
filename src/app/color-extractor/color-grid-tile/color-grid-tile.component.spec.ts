import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorGridTileComponent } from './color-grid-tile.component';

describe('ColorGridTileComponent', () => {
  let component: ColorGridTileComponent;
  let fixture: ComponentFixture<ColorGridTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorGridTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorGridTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
