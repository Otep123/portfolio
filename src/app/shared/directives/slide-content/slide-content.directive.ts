import {AfterViewInit, Directive, ElementRef, EventEmitter, Input, Output, Renderer2} from '@angular/core';

@Directive({
  selector: '[appSlideContent]'
})
export class SlideContentDirective implements AfterViewInit {
  @Input() speed: 'fast' | 'medium' | 'slow' | 'very-slow' = 'medium';
  @Input() threshold = 1;
  @Input() scrollMargin = '200px';
  @Output() inView = new EventEmitter<boolean>();

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    const node = this.element.nativeElement;
    const children = this.getChildren(node);
    const options = {
      rootMargin: "0px",
      scrollMargin: this.scrollMargin,
      threshold: this.threshold,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // If the given element this directive is attached to intersect with the viewport
        if (entry.isIntersecting) {
          // Adds the container class defined in 'styles.css'
          this.renderer.addClass(node, 'slide-up-container');
          // Adds the child classes for the animation to its children nodes
          let allClasses = `slide-up ${this.speed}`;
          for (const child of children) {
            allClasses.split(' ').forEach((className: string)=> {
              this.renderer.addClass(child, className);
            })
          }
        }
        else {
          // Removes all classes previously added if any
          this.renderer.removeClass(node, 'slide-up');
          let allClasses = `slide-up ${this.speed}`;
          for (const child of children) {
            allClasses.split(' ').forEach((className: string)=> {
              this.renderer.removeClass(child, className);
            })
          }
        }
      })
    }, options);

    observer.observe(this.element.nativeElement);
  }

  getChildren(node: any) : HTMLElement[] {
    let res : HTMLElement[] = [];
    for (const child of node.childNodes) {
      res.push(child as HTMLElement);
    }
    return res;
  }
}
