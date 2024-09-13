import { Component } from '@angular/core';
import { AppHome } from '../../../pages/home/home.component';
import { AppHeader } from "../header/header.component";
import { AppFooter } from "../footer/footer.component";

@Component({
    selector: 'app-layout',
    imports: [
    AppHome,
    AppHeader,
    AppFooter
],
    standalone: true,
    templateUrl: './layout.component.html'
})

export class AppLayout{

}