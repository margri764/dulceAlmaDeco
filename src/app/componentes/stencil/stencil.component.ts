import { Component, OnInit } from '@angular/core';
import { ServarrayfotosService} from './../../servicios/servarrayfotos.service';

@Component({
  selector: 'app-stencil',
  templateUrl: './stencil.component.html',
  styleUrls: ['./stencil.component.css']
})
export class StencilComponent implements OnInit {

  servstencil: any []=[];
  numero:any;

  constructor(private _servicio :  ServarrayfotosService ) {

    // this.servstencil = _servicio.obtenerarray2();
    // this._servicio= _servicio.obtenerindex2("id");
    // this.numero= _servicio.numeroarray2();
         

   }


  ngOnInit() {
  }

}
