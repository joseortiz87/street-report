import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { ReporteFormRoutingModule } from './reporte-form-routing.module';
import { ReporteFormComponent } from './reporte-form.component';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule,
    FormsModule,
    ReactiveFormsModule,
    ReporteFormRoutingModule
  ],
  declarations: [ReporteFormComponent],
  exports: [ReporteFormComponent],
  schemas:  [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class ReporteFormModule { }
