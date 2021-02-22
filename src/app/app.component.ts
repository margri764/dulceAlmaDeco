import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
 
export class AppComponent {

  title = 'DAD';
  public path: any = [];
 

  constructor( public router : Router,
               private ruta : ActivatedRoute,
              )
        {
                  
     

      }

  ngOnit(){}



}



