import { Component, Input, OnInit } from '@angular/core';
import { Navigation, Router, RouterLink, RouterOutlet } from '@angular/router';
import { AppHeader } from './components/layout/header/header.component';
import { AppLayout } from './components/layout//index/layout.component';
import { AppFooter } from './components/layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, RouterLink,
    AppHeader,
    AppLayout,
    AppFooter
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {


  login_text: string;
  ngOnInit(): void {

    // if (window.location.pathname !== "undefined") {
    //   if (window.location.pathname == "/login") {
    //     console.log("hi.");
    //   }
    // }

  }

  // constructor(private router: Router){

  //   const nav: Navigation = this.router.getCurrentNavigation();

  //   if (nav.extras && nav.extras.state){
  //     this.router.navigateByUrl(nav.extras.state.returnUrl);
  //   }

  //   const currentUrl = this.router.url;

  //   this.router.navigate(["/login"], { returnUrl: currentUrl});

  // }

}
