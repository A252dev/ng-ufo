import { HttpClient } from '@angular/common/http';
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
    return this.http.post(
      this.settings.getUrl() + 'profile/transfer',
      transferRequest
    )
  }

}
