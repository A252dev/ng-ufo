import { Component } from "@angular/core";

import { WelcomeInfo } from "./welcome/welcomeInfo.component";
import { AboutInfo } from "./about/about.component";
import { FAQInfo } from "./faq/faq.component";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        WelcomeInfo,
        AboutInfo,
        FAQInfo
    ],
    templateUrl: './home.component.html',
    // styleUrl: './home.component.css'
})

export class AppHome{

}