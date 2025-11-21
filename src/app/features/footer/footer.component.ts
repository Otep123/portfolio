import { Component } from '@angular/core';
import {TwoColumnComponent} from '../../shared/components/two-column/two-column.component';
import {LinksComponent} from '../links/links.component';

@Component({
  selector: 'app-footer',
  imports: [
    LinksComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  openTab(str: string): void {
    window.open(str, '_blank');
  }
}
