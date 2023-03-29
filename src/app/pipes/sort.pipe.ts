import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortData'
})
export class SortPipe implements PipeTransform {

  transform(value: any, data: string, search: string | undefined) {
    let sendData: any = []
    if (data == "favourites")
      value.map((res: any) => {
        if (res.favourity == true) {
          sendData.push({
            fullData: res,
            city: res.location,
            image: "assets/Icons/icon_" + res.weather + "_small.png",
            degree: res.celcius,
            weather: res.weather,
            fav: "assets/Icons/icon_favourite_Active.png"
          })
        }
      })
    else if (data == "recent") {
      value.map((res: any) => {
        sendData.push({
          fullData: res,
          city: res.location,
          image: "assets/Icons/icon_" + res.weather + "_small.png",
          degree: res.celcius,
          weather: res.weather,
          fav: res.favourity == true ? "assets/Icons/icon_favourite_Active.png" : "assets/Icons/icon_favourite_Deactive.png"
        })
      })
      sendData.sort((a: any, b: any) => new Date(a.fullData.date).valueOf() - new Date(b.fullData.date).valueOf())
    }

    if (search) {
      sendData = sendData.filter((res: any) => res.city.toLowerCase().includes(search))
    }
    return sendData;
  }

}
