import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  getUrl() {
    return ["http://localhost:8080/"];
  }

}
