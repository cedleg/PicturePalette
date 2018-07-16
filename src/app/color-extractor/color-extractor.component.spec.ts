import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorExtractorComponent } from './color-extractor.component';

describe('ColorExtractorComponent', () => {
  let component: ColorExtractorComponent;
  let fixture: ComponentFixture<ColorExtractorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorExtractorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorExtractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
