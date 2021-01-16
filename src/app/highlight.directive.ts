import { Directive , ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private ref:ElementRef<any>) {
    this.ref.nativeElement.style.color = "red"
   }

}
