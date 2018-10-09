import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { MDBBootstrapModule,NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent, SidebarComponent } from '../shared';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        AgmCoreModule,
        FormsModule,
        ReactiveFormsModule,
        NgbDropdownModule,
        NgbModule,
        LayoutRoutingModule,
        TranslateModule,
        MDBBootstrapModule,
        NavbarModule,
        WavesModule,
        ButtonsModule
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SidebarComponent
    ]
})
export class LayoutModule { }
