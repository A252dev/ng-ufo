import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(private http: HttpClient, private settings: SettingsService) { }

  transfer(transferRequest: any): Observable<any> {
    console.log(transferRequest);
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", "Bearer " + localStorage.getItem("jwt"));
    return this.http.post(
      this.settings.getUrl() + 'profile/transfer', transferRequest, { headers: headers }
    )
  }

  convert(convertRequest: any): Observable<any> {
    console.log(convertRequest);
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", "Bearer " + localStorage.getItem("jwt"));
    return this.http.post(
      this.settings.getUrl() + 'profile/convert', convertRequest, { headers: headers }
    )
  }

}
