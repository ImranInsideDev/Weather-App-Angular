import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  addOrRemoveFavourityItem = (data: any) => {
    if (data) {
      let localStrData: any = []
      localStrData = localStorage.getItem("savedData");
      if (localStrData) {
        localStrData = JSON.parse(localStrData);
        let boolArr = localStrData.map((element: any, index: any) => {
          if (element.location == data.location) {
            localStrData[index].favourity = !localStrData[index].favourity
            return true
          } else
            return false
        });
        if (!boolArr.includes(true))
          localStrData.push(data)
      } else
        localStrData = [data]
      localStorage.setItem("savedData", JSON.stringify(localStrData))
    }
  }

  initialFavourity = (loc: any) => {
    let localStrData: any = localStorage.getItem("savedData");
    if (localStrData) {
      localStrData = JSON.parse(localStrData);
      localStrData.map((element: any, index: any) => {
        if (element.location == loc['location'])
          loc.favourity = element.favourity;
      })
    }
  }

  recentSearchTimeUpdate = (currentSearch: any) => {
    let localStrData: any = localStorage.getItem("savedData");
    if (localStrData) {
      localStrData = JSON.parse(localStrData);
      let newLocationFinder = localStrData.map((element: any, index: any) => {
        if (element.location == currentSearch['location'])
          localStrData[index].date = currentSearch.date
        return element.location
      })
      if (!newLocationFinder.includes(currentSearch['location']))
        localStrData.push(currentSearch)
    } else
      localStrData = [currentSearch]
    localStorage.setItem("savedData", JSON.stringify(localStrData))
  }
}
