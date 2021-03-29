import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appShowbadge]'
})
export class ShowbadgeDirective {

  constructor(private elem: ElementRef) {
    this.elem.nativeElement.style.backgroundColor = 'light grey';
  }

}
