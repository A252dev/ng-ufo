import { Component } from "@angular/core";
import { assetImage } from "../../../UI/assetImage/assetImage.component";

@Component({
    selector: 'welcome-info',
    standalone: true,
    imports: [
        assetImage
    ],
    templateUrl: './welcomeInfo.component.html',
    styleUrl: '../styles.css'
})

export class WelcomeInfo{

}