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

  private weatherUrl = 'http://api.apixu.com/v1/current.json?key=';
  private key = 'd77b019ad17f4ddaa7d92036181402';


  constructor( private  http: HttpClient ) { }

  getWeather(location: string): Observable<any> {
    return this.http.get(this.weatherUrl + this.key + '&q=' + location);
  }

  // getWeather(location: string) {
  //   return this.http.get(this.weatherUrl + this.key + '&q=' + location)
  //     .toPromise()
  //     .then( (response) => {
  //       return response;
  //     } );

  // }

}
