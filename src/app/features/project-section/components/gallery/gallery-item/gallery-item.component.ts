import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-gallery-item',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './gallery-item.component.html',
  styleUrl: './gallery-item.component.css'
})
export class GalleryItemComponent { //TODO IMPLEMENT MODEL!
  @Input({required: true}) project!: {
    id: string,
    name: string,
    image: string,
    thumbnail: string,
    language: string,
    description: string,
  }
}
