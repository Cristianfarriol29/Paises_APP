import { RESTCountries } from './../../pais.interface';
import { PaisService } from './../../services/pais.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html'
})
export class PorRegionComponent {

  regiones: string[] = ["EU",
  "EFTA",
  "CARICOM",
  "PA",
  "AU",
  "USAN",
  "EEU",
  "AL",
  "ASEAN",
  "CAIS",
  "CEFTA",
  "NAFTA",
  "SAARC"]
  regionActiva: string = "";
  paises: RESTCountries[] = []


  constructor(private paisService: PaisService) { }

  activarRegion (region: string) {

    this.regionActiva = region;

    //TODO - Hacer el llamado al servicio
    this.paisService.getCountryByRegion(this.regionActiva).subscribe((resp) => {
      this.paises = resp;

      })
  }



}
