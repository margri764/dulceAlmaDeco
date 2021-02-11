
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';

import { ServarrayfotosService } from 'src/app/servicios/servarrayfotos.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 
  numero: any;

  constructor( private ruta : ActivatedRoute,
               public cart : Cart,
               private servicio : ServarrayfotosService,
             
             )
              { 

                this.ruta.params.subscribe(params=> {
          
                this.numero=servicio.itemsProductos()
               
      
                          
             });
            }

  ngOnInit(    ): void {

  }
 

}
