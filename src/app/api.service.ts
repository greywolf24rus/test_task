import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=dd11bb32b106453a0fc2598385312f1f&units=metric';

  constructor(private httpClient: HttpClient) {
  }

  public get() {
    return this.httpClient.get(this.SERVER_URL);
  }
}
