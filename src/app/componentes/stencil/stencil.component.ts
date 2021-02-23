import { Component, ElementRef, HostBinding, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';


@Component({
  selector: 'app-stencil',
  templateUrl: './stencil.component.html',
  styleUrls: ['./stencil.component.css']
})
export class StencilComponent implements OnInit {

  @HostBinding ('class.text-center') private isHovering: boolean=false;

  @ViewChild('card',{static:false}) card: ElementRef;
  
  @HostListener('click') onClick(){
    let test= this.card.nativeElement.querySelector('.card_text')
    this.rendered.setStyle(test,'color','red')
    this.isHovering= true
    
    console.log('efefefefefef')

  }
  constructor     (
                    private rendered : Renderer2
  ) {
    

 }


ngOnInit() {}

}
