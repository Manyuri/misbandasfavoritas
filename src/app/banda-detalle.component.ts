import { Component, Input } from '@angular/core';
import { Banda } from './app.component';
@Component({
 selector:'banda-detalle',
 templateUrl: './banda-detalle.component..html',
 styleUrls:['./banda-detalle.component.css']

})
export class BandaDetalleComponent{
   @Input() banda : Banda;
}