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

  // @ViewChild('fotos',{static:false}) slider: ElementRef;
  // @ViewChild('nav') nav: ElementRef;

  servfotos : any []=[];
  numero : any;
  cantidad: number;
  // lines: CartLine[] = [];
  test:any []=[];
  test2:CartLine[];
  producto:any;


 
  
 
 
  
  constructor(
    private ruta : ActivatedRoute,
    private router : Router,
    private _servicio :  ServarrayfotosService,
    private cart: Cart,
    private message : MessageService,
    private rendered:Renderer2,
 
   
     )
        { 

          this.ruta.params.subscribe(params=> {
    
          this.numero=_servicio.itemsProductos()

          // this.test=new CartLine(this.producto, this.quantity)
          // this.test=cart.lines=new 
          
        //  this.test=cart.lines.map(poke => poke.quantity)
          // this.test.cantTotal[0.quantity];
          // console.log(this.test)
            
         
             
                    
       });
          
      //  cart.lines.forEach(element => {
      //   this.test.push(element.quantity)
      //   });
      //   console.log(this.test)
   
     
    
    
   }

  ngOnInit() {
  

  }
      


      esconderSlider(){
    
      
        // this.router.navigate(['/carrito']);
     
      
      // this.rendered.setStyle(this.slider.nativeElement,'display','none');
      //  this.rendered.setStyle(this.nav.nativeElement,'display','none');
       }
 
    
 
}






