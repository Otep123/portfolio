import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {SlideContentDirective} from "../../../../shared/directives/slide-content/slide-content.directive";
import {TwoColumnComponent} from "../../../../shared/components/two-column/two-column.component";
import {LinksComponent} from '../../../links/links.component';

@Component({
  selector: 'app-profile',
  imports: [
    NgOptimizedImage,
    SlideContentDirective,
    TwoColumnComponent,
    LinksComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
