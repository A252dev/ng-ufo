import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppHeader } from './components/layout/header/header.component';
import { AppLayoutEN } from './components/layout//index/layout.component';
import { AppFooter } from './components/layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, RouterLink,
    AppHeader,
    AppLayoutEN,
    AppFooter
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'io';
}
