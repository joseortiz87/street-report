import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReporteFormComponent } from './reporte-form.component';


const routes: Routes = [
  { path: '', component: ReporteFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporteFormRoutingModule { }
