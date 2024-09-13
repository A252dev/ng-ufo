import { Component } from "@angular/core";
import { assetImage } from "../../components/UI/img/assetImage/assetImage.component";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        RouterLink,
        assetImage
    ],
    templateUrl: './home.component.html',
    styleUrl: './styles.css'
})

export class AppHome {

}