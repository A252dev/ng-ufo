import { Component } from "@angular/core";

// Логотип
import { LogoImage } from "../../UI/logoImage/logoImage.component";

// Возможность переходить по ссылкам
import { RouterLink, RouterOutlet } from "@angular/router";

// Для классов
import { NgClass } from "@angular/common";

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        LogoImage,
        NgClass,
        RouterOutlet,
        RouterLink
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})

export class AppHeader{

    // Стили для отображения флагов стран. 'false' = флаг виден, 'true' = флаг не виден

    ru: boolean = true;
    en: boolean = false;

    // При клике на флаг RU

    selectRU(){
        this.ru = true;
        this.en = false;
    }

    // При клике на флаг EN

    selectEN(){
        this.ru = false;
        this.en = true;
    }

}