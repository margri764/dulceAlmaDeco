import { Component, OnInit } from '@angular/core';
import { Cart } from '../../model/cart.model';
import { ServarrayfotosService } from '../../servicios/servarrayfotos.service';


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

 
 



}
