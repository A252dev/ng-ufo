import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private http: HttpClient, private settings: SettingsService) {
  }

  register(signRequest: any): Observable<any> {
    return this.http.post(
      this.settings.getUrl() + 'register', signRequest
    )
  }

  login(signRequest: any): Observable<any> {
    console.log("make a req...")
    return this.http.post(
      this.settings.getUrl() + 'login', signRequest
    )
  }

  profile(): Observable<any> {
    return this.http.get(this.settings.getUrl() + 'profile/index', {
      headers: this.createAuthorizationHeader()
    })
  }

  private createAuthorizationHeader() {
    if (typeof window !== 'undefined') {
      const jwtToken = window.localStorage.getItem('jwt');
      if (jwtToken) {
        return new HttpHeaders().set(
          "Authorization", "Bearer " + jwtToken
        )
      } else {
        console.log("JWT token not found in your local storage!");
      }
    }
    return null;
  }

}
