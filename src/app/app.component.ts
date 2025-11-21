import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavigationComponent} from './features/navigation/navigation.component';
import {ProfileComponent} from './features/profile-section/components/profile/profile.component';
import {AboutComponent} from './features/about-section/components/about/about.component';
import {ProjectsComponent} from './features/project-section/components/projects/projects.component';
import {FooterComponent} from './features/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent, ProfileComponent, AboutComponent, FooterComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  print(str: string) {
    console.log(str);
  }

}
