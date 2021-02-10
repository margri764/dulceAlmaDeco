import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-laminas',
  templateUrl: './laminas.component.html',
  styleUrls: ['./laminas.component.css']
})
export class LaminasComponent implements OnInit {
  
  myText: string = '';
  pruebaForm: FormGroup;

  constructor() { 
   
   
    this.pruebaForm = new FormGroup({
      'pruebaInput': new FormControl('Chao')
    })
  
  }

  ngOnInit() {
  }

}
