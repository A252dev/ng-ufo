import { Component } from "@angular/core";

import { LogoImage } from "../../UI/logoImage/logoImage.component";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        LogoImage,

        RouterOutlet,
        RouterLink
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})

export class AppHeader{
    
}