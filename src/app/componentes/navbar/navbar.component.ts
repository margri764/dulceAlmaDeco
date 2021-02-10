import { Route } from '@angular/compiler/src/core';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { MessageService } from 'src/app/servicios/message.service';
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
               private servicio : ServarrayfotosService 
             )
              { 

                this.ruta.params.subscribe(params=> {
          
                this.numero=servicio.itemsProductos()
               
      
                          
             });
            }

  ngOnInit(    ): void {

  }


}
