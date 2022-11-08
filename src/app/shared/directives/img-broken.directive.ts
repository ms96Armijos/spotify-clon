import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {

  //@Input() customImg: string | boolean = false;
  @HostListener('error') handleError(): void {
    const elementoNativo = this.elHost.nativeElement;
    elementoNativo.src = '../../../assets/images/imgbroke.png'
  }

  constructor(private elHost: ElementRef) { 

  }

}
