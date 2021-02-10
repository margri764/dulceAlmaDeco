import { 
  Component, 
  ElementRef, 
  EventEmitter, 
  Input, 
  OnInit, 
  Output, 
  Renderer2, 
  ViewChild 
} from '@angular/core';

import { Cart } from '../../model/cart.model';
import { MatDialog, MatDialogRef} from '@angular/material/dialog'
import { Router} from '@angular/router';
import { NotificationService } from 'src/app/servicios/notification.service';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  // @ViewChild('fotos') slider: ElementRef;
  // @ViewChild('nav') nav: ElementRef;

  // @Output() nombreEmitido= new EventEmitter<any>()

  // @Input()navHijo:'msje hijo' 
   
  // @Input() nombreHijo='sin nombre' 

  // propiedadCarrito:any

  name: String

  constructor(  public cart : Cart, 
                private router : Router, 
                private dialog : MatDialog,
                public dialogRef : MatDialogRef<CarritoComponent>,
                private notificationService : NotificationService
              ) 
              {         
                
              }
 
 


  ngOnInit()   {  }


 
   onCloseSeguir(){
  
    if(this.router.url!='/carrito'){
    this.dialogRef.close() 
   
    }else{
      
    this.router.navigateByUrl('/inicio')
    }
   }

    
    
    onCloseComprar(){
      this.router.navigateByUrl('/contactus')
      if(this.router.url!='/carrito')
      this.dialogRef.close()
  
    }
  
   notification(){
     if(this.cart.lines.length != 0)
    this.notificationService.success(':: Producto Agregado al Carrito')
   }
  
  // mostrarSlider(propiedad:any){
  //   // this.rendered.setStyle(this.propiedad.nativeElement,'display','block')
  //   // this.rendered.setStyle(this.nav.nativeElement,'display','block')
  //   this.propiedad=propiedad
  //   this.message.propiedad.setStyle(this.propiedad.nativeElement,'display','block')
  // }

  
  // Propiedad(){
  //   this.rendered.setStyle(this.nav.nativeElement,'display','none')
  //   this.message.propiedad=this.rendered
  //   console.log(this.rendered)
  // }

}
