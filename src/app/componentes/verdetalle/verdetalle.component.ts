import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ServarrayfotosService} from './../../servicios/servarrayfotos.service';
import { Cart }from '../../model/cart.model';




@Component({
  selector: 'app-verdetalle',
  templateUrl: './verdetalle.component.html',
  styleUrls: ['./verdetalle.component.css']
})

export class VerdetalleComponent implements OnInit {

 arrProductos : any[]=[] ;

  
  constructor(
   
    private ruta : ActivatedRoute,
    public servicio :  ServarrayfotosService,
    public cart:Cart,
 
   
    )
        { 

          this.ruta.params.subscribe(params=>{
      
          this.arrProductos = this.servicio.getIndex(params["id"]);  
    
   


      })
  
  }



  ngOnInit(  ) {

  }
  addBook(producto){
    this.cart.addLine(producto)
  }
}



