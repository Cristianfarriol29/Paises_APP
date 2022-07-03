import { PaisService } from './../../services/pais.service';
import { RESTCountries } from './../../pais.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent implements OnInit {

  hayError: boolean = false;
  country: RESTCountries[] = [];
  termino: string = "";

  constructor(private capitalService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.termino = termino;
this.capitalService.buscarCapital(this.termino).subscribe((resp) => {
this.country = resp;
})
}


}
