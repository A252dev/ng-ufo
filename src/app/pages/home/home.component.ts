import { Component } from "@angular/core";
import { assetImage } from "../../components/UI/img/assetImage/assetImage.component";
import { RouterLink } from "@angular/router";
import { FaqSectionComponent } from "../../components/UI/main/faq-section/faq-section.component";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
    RouterLink,
    assetImage,
    FaqSectionComponent
],
    templateUrl: './home.component.html',
    styleUrl: './styles.css'
})

export class AppHome {
}