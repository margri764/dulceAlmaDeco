import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ServarrayfotosService} from './../../servicios/servarrayfotos.service';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  arrCategorias:any[]=[];
  numero : any;  

  constructor(private _servicio :  ServarrayfotosService ) { 

   
    // this._servicio= _servicio.obtenerindex2("id");
    // this.numero= _servicio.numeroarray2();

  }

  ngOnInit() {
  }

}
