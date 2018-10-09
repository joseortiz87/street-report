import { ReporteFormModule } from './reporte-form.module';

describe('ReporteFormModule', () => {
  let reporteFormModule: ReporteFormModule;

  beforeEach(() => {
    reporteFormModule = new ReporteFormModule();
  });

  it('should create an instance', () => {
    expect(reporteFormModule).toBeTruthy();
  });
});
