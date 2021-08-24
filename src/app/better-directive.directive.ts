import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor:string='transparent';
  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit() {
   
  }
  @HostListener('mouseenter') mouseenter(eventData:Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','pink');
    this.backgroundColor='blue';
  }
  @HostListener('mouseleave') mouseleave(eventData:Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','white');
    this.backgroundColor='white';

  }
}
