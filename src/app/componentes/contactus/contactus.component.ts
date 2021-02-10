import { Component, Input, OnInit} from '@angular/core';
import { MessageService } from '../../servicios/message.service';
import swal from 'sweetalert';
import { Cart } from '../../model/cart.model';
import { FormGroup, FormControl,NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';




@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
  
})

export class ContactusComponent implements OnInit {


// createFormGroup(){

//   return new FormGroup({

//     nombre: new FormControl(''),
//     cel: new FormControl(''),
//     email: new FormControl(''),
//     cantidad: new FormControl(''),
//     producto: new FormControl(''),
//     total: new FormControl(''),
//     mensaje: new FormControl(''),

//   });

// }

// contactForm: FormGroup;


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

            //   this.contactForm = this.createFormGroup();
            // console.log(this.contactForm.value)
           

             }
            
                 

                  probando( ){
                    this.cart.lines.forEach(element => {
                    this.array.push(element.producto.nombre)
                     });
                    this.string=this.array
                   
                    // console.log(this.string) 
                    }
                   
                  
   

  ngOnInit(  ) {
                }
               

                // clearForm(){
                //   (<HTMLFormElement>document.getElementById("form")).reset();
                //   (<HTMLFormElement>document.getElementById("pedido")).reset();

                //  }

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

                  // actionMethod(){
                  //   this.clicked=true;
                  // }

              // onResetForm(){
              //   this.contactForm.reset()
              // }

              // onSaveForm(form){
              //   this._MessageService.sendMessage(form).subscribe(() => {
              //       swal("Su Pedido", "Pedido enviado correctamente", "success");
                 
              //       });
              // }
               
            }    