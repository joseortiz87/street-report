import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ReporteApi } from '../../shared/services/ReporteAPI';
import * as model from '../../shared/models/models';

@Component({
  selector: 'app-reporte-form',
  templateUrl: './reporte-form.component.html',
  styleUrls: ['./reporte-form.component.scss']
})
export class ReporteFormComponent implements OnInit {

  constructor(private api: ReporteApi) { }

  ngOnInit() {
    console.log("init reporte");
  }

  title: string = 'Reporte de Incidencias';
  lat: number = 19.047533471702927;
  lng: number = -98.20287514724367;
  zoom: number = 19;
  isMapClick: boolean = false;
  isRegistro: boolean = true;
  latMarker: number;
  lngMarker: number;
  nombre = new FormControl();
  fecha = new FormControl();
  reporte = new FormControl();
  ubicacion = new FormControl();
  dependencia = new FormControl();
  dependencias = [
    {
      name: 'Agua',
      value: 1
    },
    {
      name: 'Parques y Jardines',
      value: 2
    }
  ];
  private reporteObj : model.Reporte = {};
  private error;
  
  datos = [
    {
      nombre : "NOMBRE1",
      fecha : "2018-08-09",
      reporte : "REPORTE1",
      lat : 19.047591661265233,
      lng : -98.20276123920678
    },
    {
      nombre : "NOMBRE2",
      fecha : "2018-08-09",
      reporte : "REPORTE2",
      lat : 19.04728754226811,
      lng : -98.20288989939326
    },
    {
      nombre : "NOMBRE3",
      fecha : "2018-08-09",
      reporte : "REPORTE3",
      lat : 19.047274865483235,
      lng : -98.20207987227076
    }
  ];
  fillcolor = "#dc3545";

  placeMarker($event){
    console.log($event.coords.lat);
    console.log($event.coords.lng);
    this.latMarker = $event.coords.lat;
    this.lngMarker = $event.coords.lng;
    this.isMapClick = true;
    this.ubicacion.setValue("[" + this.latMarker + "," + this.lngMarker + "]" );
  }

  guardaDatos(){
    this.reporteObj =
      {
        nombre : this.nombre.value,
        entidad : '',
        municipio : '',
        dependencia : '',
        fecha : this.fecha.value,
        reporte : this.reporte.value,
        lat : this.latMarker,
        lng : this.lngMarker,
        direccion : '',
        status : ''
      };
    console.log(JSON.stringify(this.reporteObj));
    this.api.postReporte(this.reporteObj).subscribe(
      reporte => {
          this.reporteObj = reporte;
      },
      error => this.error = error
    );
    this.isRegistro = false;
  }

}
