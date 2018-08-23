import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule,NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';

import { AgmCoreModule } from '@agm/core';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFRscvaKopKuEUhbkNgh3uVLmJN_J7wkk'
    }),
    NgbModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    NavbarModule,
    WavesModule,
    ButtonsModule
  ],
  providers: [],
  declarations: [ AppComponent, HeaderComponent ],
  bootstrap: [ AppComponent ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule {}