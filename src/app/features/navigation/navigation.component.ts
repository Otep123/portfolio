import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  public navigateToSection(section: string): void {
    let sectionDiv = document.getElementById(section);
    if (sectionDiv) {
      sectionDiv.scrollIntoView({behavior: 'smooth'});
    }
  }
}
