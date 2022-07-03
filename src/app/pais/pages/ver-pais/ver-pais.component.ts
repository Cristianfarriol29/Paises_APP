import { RESTCountries } from './../../pais.interface';
import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  pais!:RESTCountries;
  hayPais: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
    private paisService: PaisService) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.paisService.getPaisPorAlpha(id)  )
    ).subscribe(valor => {
      this.hayPais = true;
      this.pais = valor
    })

// this.activatedRoute.params.subscribe(({id}) => {
//   this.paisService.getPaisPorAlpha(id)
//   .subscribe(pais => {
//     console.log(pais)
//   })
// })


  }

}
