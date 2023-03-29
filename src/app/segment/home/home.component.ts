import { Component, Input } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  constructor(
    private commonService: CommonService
  ) { }
  @Input() currentSearchWeather: any;

  favouriteFun = (change: boolean) => {
    this.currentSearchWeather.favourity = change;
    this.commonService.addOrRemoveFavourityItem(this.currentSearchWeather)
  }

  changeCelFare = (data: string) => {
    this.currentSearchWeather.currentDegree = data;
  }

}
