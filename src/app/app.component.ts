import { Component, Input, OnInit } from '@angular/core';
import { Navigation, Router, RouterLink, RouterOutlet } from '@angular/router';
import { AppHeader } from './components/layout/header/header.component';
import { AppLayout } from './components/layout//index/layout.component';
import { AppFooter } from './components/layout/footer/footer.component';
import { NgbAccordionBody, NgbAccordionCollapse, NgbAccordionItem, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, RouterLink,
    AppHeader,
    AppLayout,
    AppFooter
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
