import { Component } from '@angular/core';
import { NgbAccordionBody, NgbAccordionCollapse, NgbAccordionItem, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [NgbAccordionModule,
    NgbAccordionItem,
    NgbAccordionCollapse,
    NgbAccordionBody],
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.css'
})
export class FaqSectionComponent {

}
