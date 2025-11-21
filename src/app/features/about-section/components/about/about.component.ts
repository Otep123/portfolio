import { Component } from '@angular/core';
import {TwoColumnComponent} from '../../../../shared/components/two-column/two-column.component';
import {NgOptimizedImage} from '@angular/common';
import {SlideContentDirective} from '../../../../shared/directives/slide-content/slide-content.directive';

@Component({
  selector: 'app-about',
  imports: [
    TwoColumnComponent,
    NgOptimizedImage,
    SlideContentDirective
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
