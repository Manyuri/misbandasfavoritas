import { Component } from '@angular/core';
import {Banda} from './banda';


const BANDAS:Banda[]=[
  {id: 11, nombre: 'Morat'},
  {id: 12, nombre: 'Melendi'},
  {id: 13, nombre: 'Gilberto Santa Rosa'},
  {id: 14, nombre: 'Mickey Taveras'},
  {id: 15, nombre: 'Romeo Santos'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Mis bandas favoritas';
  bandas = BANDAS;

  banda : Banda;
  Seleccionar(item: Banda): void{
    this.banda = item;
  }
  
}
