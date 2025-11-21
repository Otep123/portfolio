import {AfterViewInit, Component, ViewChild, ViewContainerRef} from '@angular/core';
import {ProjectBrowserComponent} from '../project-browser/project-browser.component';
import {Project} from '../../../../core/models/project.model';
import {ProjectInfoComponent} from '../project-info/project-info.component';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChild('projectSection', { read: ViewContainerRef, static: true })
  vc!: ViewContainerRef;

  protected projects: Project[] = [
    {
      id: "1",
      name: "Boids",
      image: "/project-gifs/boids.gif",
      thumbnail: "/project-icons/house.png",
      language: "C#, Godot",
      description: "A small demo demonstrating Craig Reynold's artificial life program. ",
    },
    {
      id: "2",
      name: "ProcGen Landscape",
      image: "/project-gifs/landscape.gif",
      thumbnail: "/project-icons/house.png",
      language: "C#, Godot",
      description: "A small demo demonstrating Perlin noise and procedural generation.",
    },
    {
      id: "3",
      name: "Delaunay Rooms Generator",
      image: "/project-gifs/delaunay.gif",
      thumbnail: "/project-icons/house.png",
      language: "C#, Godot",
      description: "A small demo demonstrating Perlin noise and procedural generation.",
    }
  ]

  ngAfterViewInit() {
    this.ProjectBrowser();
  }

  print(str: string) {
    console.log(str);
  }

  private ProjectBrowser(): void {
    this.vc.clear();
    let pbc = this.vc.createComponent(ProjectBrowserComponent);
    pbc.instance.projects = this.projects;
    pbc.instance.selectedProject.subscribe((selectedProject) => {
      this.vc.clear();
      let projInfo = this.vc.createComponent(ProjectInfoComponent);
      projInfo.instance.project = this.projects.find((p) => p === selectedProject) as Project;
      projInfo.instance.exitProject.subscribe(() => {
        this.ProjectBrowser();
      })
    });
  }
}
