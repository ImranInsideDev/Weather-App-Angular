import { Injectable } from '@angular/core';
import { ajaxURL } from 'src/environments/environment';
import { HttpAjaxService } from './http-ajax.service';

@Injectable({
  providedIn: 'root'
})
export class ConnectionIntermidiatorService {
  constructor(private ajaxServices: HttpAjaxService) { }

  getSearchCityWeather = (searchData: string) => {
    console.log(`${ajaxURL.api}?key=${ajaxURL.key}&q=${searchData}`)
    return this.ajaxServices.httpGetWithJson(`${ajaxURL.api}?key=${ajaxURL.key}&q=${searchData}`)
  }
}
