import {Component, EventEmitter, Input, Output, ViewChild, ViewContainerRef} from '@angular/core';
import {Project} from '../../../../core/models/project.model';
import {TwoColumnComponent} from '../../../../shared/components/two-column/two-column.component';
import {GalleryComponent} from '../gallery/gallery.component';
import {SlideContentDirective} from "../../../../shared/directives/slide-content/slide-content.directive";

@Component({
  selector: 'app-project-browser',
    imports: [
        GalleryComponent,
        TwoColumnComponent,
        TwoColumnComponent,
        GalleryComponent,
        SlideContentDirective
    ],
  templateUrl: './project-browser.component.html',
  styleUrl: './project-browser.component.css'
})
export class ProjectBrowserComponent {

  @Output() selectedProject = new EventEmitter<Project>;
  @Input({required: true}) projects!: Project[]

  selectProject(project: Project) {
    this.selectedProject.emit(project);
  }
}
