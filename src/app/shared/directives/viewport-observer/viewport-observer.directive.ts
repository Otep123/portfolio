import {AfterViewInit, Directive, ElementRef, EventEmitter, Output} from '@angular/core';

@Directive({
  selector: '[appViewportObserver]'
})
export class ViewportObserverDirective implements AfterViewInit {

  @Output() inView = new EventEmitter<boolean>();

  constructor(private element: ElementRef) { }

  ngAfterViewInit(): void {
    const threshold = 0.2;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        this.inView.emit(entry.isIntersecting);
      })
    }, { threshold: threshold });

    observer.observe(this.element.nativeElement);
  }
}
