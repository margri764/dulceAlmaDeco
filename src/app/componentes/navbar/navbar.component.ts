import { Route } from '@angular/compiler/src/core';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { MessageService } from 'src/app/servicios/message.service';
import { ServarrayfotosService } from 'src/app/servicios/servarrayfotos.service';
import { CarritoComponent } from '../carrito/carrito.component';

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
               private dialog : MatDialog, 
             )
              { 

                this.ruta.params.subscribe(params=> {
          
                this.numero=servicio.itemsProductos()
               
      
                          
             });
            }

  ngOnInit(    ): void {

  }
  onCreate(){
    const dialogConfig=new MatDialogConfig()
    dialogConfig.disableClose=true
    dialogConfig.autoFocus=true
    dialogConfig.width="100%"
    dialogConfig.height="100%"
    this.dialog.open(CarritoComponent,dialogConfig)
   }

}
