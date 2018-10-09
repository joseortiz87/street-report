import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { WavesModule, CardsFreeModule} from 'angular-bootstrap-md';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { ChartModule } from 'angular-highcharts';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule,
    FormsModule,
    ReactiveFormsModule,
    WavesModule,
    CardsFreeModule, 
    ChartModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  schemas:  [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeModule { }
