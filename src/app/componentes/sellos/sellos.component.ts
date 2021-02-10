import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Cart } from 'src/app/model/cart.model';
import { ServarrayfotosService } from 'src/app/servicios/servarrayfotos.service';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-sellos',
  templateUrl: './sellos.component.html',
  styleUrls: ['./sellos.component.css']
})
export class SellosComponent implements OnInit {
  arrayProductos : any []=[];
  numero : any;  
  cartel : any;

          constructor(  private _servicio :  ServarrayfotosService, 
                        public cart : Cart,
                        private dialog : MatDialog
                    
                      ) 
      
            {

              this.arrayProductos = _servicio.getProductos();
              this._servicio= _servicio.getIndex("id");
              this.numero= _servicio.itemsProductos();
                  

            
              
           
   }
 


  ngOnInit() {  
    
   
  }

  addBook(producto){
    this.cart.addLine(producto)
  }

 
 onCreate(){
  const dialogConfig=new MatDialogConfig()
  dialogConfig.disableClose=true
  dialogConfig.autoFocus=true
  dialogConfig.width="60%"
  this.dialog.open(CarritoComponent,dialogConfig)
 }



}
