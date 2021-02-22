import { Component, OnInit } from '@angular/core';
import { ServarrayfotosService} from './../../servicios/servarrayfotos.service';
import { Cart }from '../../model/cart.model';
import swal from 'sweetalert';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-fofacil',
  templateUrl: './fofacil.component.html',
  styleUrls: ['./fofacil.component.css']
})
export class FofacilComponent implements OnInit {

  
  arrayProductos : any []=[];
  numero : any;  
  cartel : any;

          constructor(  
                        private servicio :  ServarrayfotosService, 
                        public cart : Cart,
                        private dialog : MatDialog,
                      ) 
      
            {

              this.arrayProductos = servicio.getProductos();
              this.servicio= servicio.getIndex("id");
              this.numero= servicio.itemsProductos();
                  

            
              
           
   }
 

  ngOnInit() {    }
  
      addBook(producto){
        this.cart.addLine(producto)
      }
    
      getCartel(){
        this.cartel=swal("Muchas Gracias!", "Producto añadido al Carrito!", "success");
        return this.cartel
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
