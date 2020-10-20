import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  apiKey:String = '336e34465f608b5c91ab058e4db737d4'
  URI: String = ''

  constructor(
    private _api: HttpClient
  ){
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`
  }

  getClima(cityName:String, countryCode:String){
    return this._api.get(`${this.URI}${cityName},${countryCode}`)
  }
}
