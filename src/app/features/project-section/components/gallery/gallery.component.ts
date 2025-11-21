import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GalleryItemComponent} from './gallery-item/gallery-item.component';
import {Project} from '../../../../core/models/project.model';

@Component({
  selector: 'app-gallery',
  imports: [
    GalleryItemComponent
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  @Output() selectedProjectEvent = new EventEmitter<Project>();
  @Input({required: true}) projects!: Project[];

  GetProjects() {
    return Object.values(this.projects);
  }

  OnClick(id: string) : void {
    this.selectedProjectEvent.emit(this.projects.find(g => g.id === id) as Project);
  }
}
