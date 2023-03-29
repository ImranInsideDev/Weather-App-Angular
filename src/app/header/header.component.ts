import { Component, OnInit } from '@angular/core';
import { ajaxURL } from 'src/environments/environment';
import { CommonService } from '../services/common.service';
import { ConnectionIntermidiatorService } from '../services/connection-intermidiator.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  selected: string = "HOME";
  searchTerm: string = "";

  currentSearchWeather: any = {
    date: new Date().toUTCString().split("GMT")[0],
    location: "Udupi, Karnataka",
    favourity: false,
    logo: "assets/Icons/icon_mostlysunny.png",
    weather: "Mostly sunny",
    celcius: "20",
    farenheit: "87",
    currentDegree: "farenheit",
    bottomView: [
      ["assets/Icons/icon_temperature_info.png", "Min-Max", `75° - 90°`],
      ["assets/Icons/icon_precipitation_info.png", "Precipitation", "0%"],
      ["assets/Icons/icon_humidity_info.png", "Humidity", "47%"],
      ["assets/Icons/icon_wind_info.png", "Wind", "4 mph"],
      ["assets/Icons/icon_visibility_info.png", "Visibility", "12mph"]
    ]
  }

  constructor(
    private restCtrl: ConnectionIntermidiatorService,
    private commonService: CommonService
  ) { }

  selectLabel = (data: string) => {
    this.selected = data;
    this.searchTerm = "";
  }

  getSerachLocationWeather = ($event: any) => {
    if (this.selected == "HOME") {
      let search = $event.target ? $event.target.value : $event
      this.restCtrl.getSearchCityWeather(search)
        .subscribe((res: any) => {
          this.currentSearchWeather = {
            date: new Date(res.location.localtime).toUTCString().split('GMT')[0],
            location: res.location.name + ", " + res.location.region,
            favourity: false,
            logo: "assets/Icons/icon_mostlysunny.png",
            weather: res.current.condition.text,
            celcius: res.current.temp_c,
            farenheit: res.current.temp_f,
            currentDegree: "farenheit",
            bottomView: [
              ["assets/Icons/icon_temperature_info.png", "Min-Max", `${res.current.temp_c - 7} - ${res.current.temp_c + 3}`],
              ["assets/Icons/icon_precipitation_info.png", "Precipitation", res.current.precip_mm + "%"],
              ["assets/Icons/icon_humidity_info.png", "Humidity", res.current.humidity + "%"],
              ["assets/Icons/icon_wind_info.png", "Wind", res.current.wind_mph + "mph"],
              ["assets/Icons/icon_visibility_info.png", "Visibility", res.current.vis_km + "mph"]
            ]
          }
          this.commonService.initialFavourity(this.currentSearchWeather)
          this.commonService.recentSearchTimeUpdate(this.currentSearchWeather)
        }, (error: any) => {
          alert("Please, enter valid city!")
        })
    } else {
      this.searchTerm = $event.target.value
    }
  }

  ngOnInit(): void {
    this.getSerachLocationWeather("Chennai");

  }
}
