import { Component,  OnInit} from '@angular/core';
import { MessageService } from '../../servicios/message.service';
import swal from 'sweetalert';
import { Cart } from '../../model/cart.model';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';




@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
  
})

export class ContactusComponent implements OnInit {





quantity:any;
start:true;  
array: any []=[] 
string:any;
clicked:boolean;

  


constructor( public _MessageService: MessageService,
             private cart : Cart,
             private router : Router,
             public dialogRef : MatDialogRef<ContactusComponent>,

            ) 
            
            { 

   
           

             }
            
                 

                  probando( ){
                    this.cart.lines.forEach(element => {
                    this.array.push(element.producto.nombre)
                     });
                    this.string=this.array
                   
             
                    }
                   
                  
   

  ngOnInit(  ) {
                }
               

           

                onCloseSeguir(){
  
                  this.router.navigateByUrl('/inicio')
                 
                 }

              

                contactForm(form) {
                  this._MessageService.sendMessage(form).subscribe(() => {
                  swal("Su Pedido", "Pedido enviado correctamente", "success");
                  });
                  this.cart.clear();
                  this.clicked=false
           
       


                  }

             
               
            }    