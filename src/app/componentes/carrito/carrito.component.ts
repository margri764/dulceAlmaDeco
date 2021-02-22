import { 
  Component, 

  OnInit, 
 
} from '@angular/core';

import { Cart } from '../../model/cart.model';
import {  MatDialogRef} from '@angular/material/dialog'
import { Router} from '@angular/router';
import { NotificationService } from 'src/app/servicios/notification.service';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

 

  name: String

  constructor(  public cart : Cart, 
                private router : Router, 
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

}
