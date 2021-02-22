import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor,NG_VALUE_ACCESSOR } from '@angular/forms';
import { Cart, CartLine } from '../model/cart.model';

@Component({
  selector: 'app-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputControlComponent),
      multi: true
    }
  ]
})
export class InputControlComponent implements OnInit,ControlValueAccessor {
  
  currentValue : string="";
  currentValue2 :string="";
  total : any;

  onChange = (a: any) => { };
  onTouch = () => { };
  isDisabled: boolean;

  quantity:any;
  start:true;  
  array: any []=[] 
  string:any;
  data:string="";


  constructor( private cart : Cart) { }
 
  probando( ){
    this.cart.lines.map(element => {
    this.array.push("\n" + element.quantity + element.producto.nombre +" $ "+ element.lineTotal )
     });
   

    this.total= this.cart.cartPrice
    this.writeValue(this.array)
    
    this.add()
     
    }


   
    
  ngOnInit(): void {
    
      this.probando()
  }




  add() {
 
    this.currentValue2=this.total 
    this.onChange(this.currentValue2);
   }

  

  writeValue(value: any): void {
    if (value)  {
       this.currentValue = value;
   
    }
    this.onChange(this.currentValue  || this.currentValue2);
    
  }



  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

}
