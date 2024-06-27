import { Component } from "@angular/core";
import { assetImage } from "../../../UI/assetImage/assetImage.component";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'welcome-info',
    standalone: true,
    imports: [
        assetImage,
        RouterLink
    ],
    templateUrl: './welcomeInfo.component.html',
    styleUrl: '../styles.css'
})

export class WelcomeInfo{

}