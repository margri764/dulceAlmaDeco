import { Component, OnInit,Renderer2} from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import { ServarrayfotosService} from './../../servicios/servarrayfotos.service';
import { Cart, CartLine  } from 'src/app/model/cart.model';
import { MessageService } from 'src/app/servicios/message.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {


  numero : any;


 
  
 
 
  
  constructor(
    private ruta : ActivatedRoute,
    private _servicio :  ServarrayfotosService,
 
   
     )
        { 

          this.ruta.params.subscribe(params=> {
    
          this.numero=_servicio.itemsProductos()

            
         
             
                    
       });
          
    
     
    
    
   }

  ngOnInit() {
  

  }
      


 
}






