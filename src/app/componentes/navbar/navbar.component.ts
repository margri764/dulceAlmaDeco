
import { 
  Component, 
  ElementRef, 
  OnInit, 
  Renderer2, 

} from '@angular/core';

import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { ServarrayfotosService } from 'src/app/servicios/servarrayfotos.service';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 
  numero: any;
  navbarOpen:boolean;

  

  constructor( private ruta : ActivatedRoute,
               public cart : Cart,
               private servicio : ServarrayfotosService,
               private rendered : Renderer2,
               private element : ElementRef,
               private router: Router

             
             )
              { 

                this.ruta.params.subscribe(params=> {
          
                this.numero=servicio.itemsProductos()
               
                               
             });

                  
            }
          
          
          

  ngOnInit(    ): void {

    this.router.events
    .pipe(filter(evt => evt instanceof NavigationEnd))  
    .subscribe((evt: NavigationEnd) => {
      this.navbarOpen = false;
    });
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
 
 }
}
  
 



