import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/operator/map';
import 'rxjs/operator/toPromise';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class WeatherService {

  private weatherUrl = 'http://api.apixu.com/v1/current.json?';
  private key = '';


  constructor( private  http: HttpClient ) { }

  getWeather(location: string) {
    return this.http.get(this.weatherUrl + 'key=' + this.key + '&q=' + location)
      .toPromise()
      .then( (response) => {
        return response;
      } );

  }

}
