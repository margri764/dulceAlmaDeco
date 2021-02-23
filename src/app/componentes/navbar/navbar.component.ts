
import { 
  Component, 
  ElementRef, 
  HostBinding, 
  HostListener, 
  OnInit, 
  Renderer2, 
  ViewChild 
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { ServarrayfotosService } from 'src/app/servicios/servarrayfotos.service';
// import { navmdb } from '../../../../node_modules/bootstrap'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 
  numero: any;

  // @HostBinding ('attr.data-toggle)') private isHovering: boolean=false;

  @ViewChild('colapsar') colapsar: ElementRef;
  
  @HostListener('click') OnClick(){
    let test= this.colapsar.nativeElement.querySelector('.navbar-toggler')
    // this.rendered.setAttribute(test,'data-toggle','')
  

      // this.isHovering= true;
    
    console.log("test")

  }
  // @ViewChild('navbarid') private navbaridRef: navmdb;
  
  // onClick(event): void {
  // if (this.navbaridRef.shown) {
  // this.navbaridRef.toggle(event);
  // }
  // console.log('test')
  // }

  constructor( private ruta : ActivatedRoute,
               public cart : Cart,
               private servicio : ServarrayfotosService,
               private rendered : Renderer2,
               private element : ElementRef

             
             )
              { 

                this.ruta.params.subscribe(params=> {
          
                this.numero=servicio.itemsProductos()
               
      
                          
             });

            //  const navLinks = document.querySelectorAll('.nav-item')
            //  const menuToggle = document.getElementById('navbarSupportedContent')
            //  const bsCollapse = new.navmdb.Collapse(menuToggle)
            //  navLinks.forEach((l) => {
            //      l.addEventListener('click', () => { bsCollapse.toggle() })
            //  })
           
            
            }
          
          
          

  ngOnInit(    ): void {

  }
 
 

}
