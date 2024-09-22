import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  checkAuth() {

    if (typeof window !== "undefined") {

      if (window.localStorage.getItem('jwt') == null) {
        this.router.navigate(["/login"]);
      }

    }
  }
}
