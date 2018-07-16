import { ColorExtractorModule } from './color-extractor.module';

describe('ColorExtractorModule', () => {
  let colorExtractorModule: ColorExtractorModule;

  beforeEach(() => {
    colorExtractorModule = new ColorExtractorModule();
  });

  it('should create an instance', () => {
    expect(colorExtractorModule).toBeTruthy();
  });
});
