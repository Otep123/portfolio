import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-links',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './links.component.html',
  styleUrl: './links.component.css'
})
export class LinksComponent {
  @Input() mode : 'light' | 'dark' = 'light';

  openTab(str: string): void {
    window.open(str, '_blank');
  }
}
