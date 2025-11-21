import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {Project} from '../../../../core/models/project.model';
import {TwoColumnComponent} from '../../../../shared/components/two-column/two-column.component';
import {SlideContentDirective} from "../../../../shared/directives/slide-content/slide-content.directive";

@Component({
  selector: 'app-project-info',
    imports: [TwoColumnComponent, NgOptimizedImage, SlideContentDirective],
  templateUrl: './project-info.component.html',
  styleUrl: './project-info.component.css'
})
export class ProjectInfoComponent {
  @Input({required: true}) project!: Project;
  @Output() exitProject = new EventEmitter<void>();

  onBackButtonClick(): void {
    this.exitProject.emit();
  }
}
