import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { WeatherService } from './weather.service';
import { OverlayComponent } from './overlay/overlay.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OverlayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
