import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFoo]',
  standalone: true
})
export class FooDirective {

  constructor(private elementRef: ElementRef) {
    console.log('ele', elementRef);
    let ele = elementRef.nativeElement as HTMLElement;
    ele.style.color = 'yellow';
    ele.style.color = 'yellow';
    ele.style.background = 'gray';
    ele.style.padding = '1rem';
  }

}
