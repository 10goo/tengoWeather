import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  location = 'miercurea-ciuc';

  weather = {
    current: {
      condition: {
        icon: '',
        text: ''
      },
      temp_c : '',
      wind_kph : '',
      humidity: '',
      precip_mm: ''
    }
  };

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather(): void {
    this.weatherService.getWeather(this.location).subscribe(
      httpWeather => this.weather = httpWeather
    );

    // this.weatherService.getWeather(this.location).then( (data) => {
    //   this.weather = data.current;
    //  } ).catch((err) => {
    //     console.log('Location unknown. Try another location');
    //  });
  }

}
