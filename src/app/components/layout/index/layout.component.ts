import { Component } from '@angular/core';
import { AppHome } from '../../pages/home/home.component';

@Component({
    selector: 'app-layout',
    imports: [
        AppHome,
    ],
    standalone: true,
    templateUrl: './layout.component.html'
})

export class AppLayout{

}