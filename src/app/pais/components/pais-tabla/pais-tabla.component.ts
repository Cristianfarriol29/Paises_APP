import { RESTCountries } from './../../pais.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent implements OnInit {

  @Input() country: RESTCountries[] = [];
  @Input() capital: RESTCountries[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
