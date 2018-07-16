import { ColorExtractorRoutingModule } from './color-extractor-routing.module';

describe('ColorExtractorRoutingModule', () => {
  let colorExtractorRoutingModule: ColorExtractorRoutingModule;

  beforeEach(() => {
    colorExtractorRoutingModule = new ColorExtractorRoutingModule();
  });

  it('should create an instance', () => {
    expect(colorExtractorRoutingModule).toBeTruthy();
  });
});
