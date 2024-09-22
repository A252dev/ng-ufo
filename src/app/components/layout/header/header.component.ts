import { Component, EventEmitter, Inject, Input, OnInit, Output } from "@angular/core";

// Logo
import { LogoImage } from "../../UI/img/logoImage/logoImage.component";

// Routes
import { RouterLink, RouterOutlet, Router, ActivatedRoute } from "@angular/router";

// For the classes
import { NgClass } from "@angular/common";

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        LogoImage,
        NgClass,
        RouterOutlet,
        RouterLink, NgClass
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})

export class AppHeader implements OnInit {

    login_link: boolean = false;
    register_link: boolean = false;
    logout_link: boolean = true;

    constructor(private router: Router) { }

    ngOnInit(): void {

        // if (typeof window !== "undefined") {

        //     if (window.location.pathname === '/profile') {
        //         this.login_link = true;
        //         this.register_link = true;
        //         this.logout_link = false;
        //         // console.log('buttons is work...');

        //         if (window.localStorage.getItem('jwt') == null) {
        //             // console.log("jwt is null!!!");
        //             this.login_link = false;
        //             this.register_link = false;
        //             this.logout_link = true;
        //             // this.router.navigateByUrl("login");
        //         }

        //     }

        // }

    }

    logout() {
        localStorage.removeItem("jwt");
        this.router.navigateByUrl("/");
        this.login_link = false;
        this.register_link = false;
        this.logout_link = true;
    }

    // Styles for shows the countries. 'false' = flag is shown, 'true' = flag is not shown

    ru: boolean = true;
    en: boolean = false;

    // Change on RU

    selectRU() {
        this.ru = true;
        this.en = false;
    }

    // Change on EN

    selectEN() {
        this.ru = false;
        this.en = true;
    }

}