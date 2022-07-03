import { RESTCountries } from './../../pais.interface';
import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';
import { ArrayType } from '@angular/compiler';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent  {

  termino: string = "";
  hayError: boolean = false;
  country: RESTCountries[] = [];
  sugerenciasPaises: RESTCountries[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService:PaisService) { }

  buscar(termino: string) {

this.termino = termino;
this.paisService.buscarPais(this.termino).subscribe((resp) => {
this.country = resp;

  this.hayError = false;
}, (error) => {
  this.hayError = true;
})
  }

sugerencias(event:string){
  this.mostrarSugerencias = true;
this.hayError = false;
//TODO: Crear sugerencias
this.paisService.buscarPais(event).subscribe((resp) => {
this.sugerenciasPaises = resp;
},
(err) => this.sugerenciasPaises = []
)
  }

}
