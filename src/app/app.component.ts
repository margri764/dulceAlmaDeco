import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert';
import { pathToFileURL } from 'url';
import { MessageService } from "./servicios/message.service";
// import * as swal from 'sweetalert';
// import { SweetAlert } from 'sweetalert/typings/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
 
export class AppComponent {

  title = 'DAD';
  public path: any = [];
 

  constructor( private router : Router,
               private ruta : ActivatedRoute,
              )
        {
                  
     

      }

  ngOnit(){}



}



