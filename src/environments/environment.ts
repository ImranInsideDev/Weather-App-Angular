const apiKey: any = {
  weatherapi: "30035b29bb604a178c384257232803",
  openweathermap: "30035b29bb604a178c384257232803"
}



const serverURL: any = {
  openweathermap: "https://api.openweathermap.org/data/2.5/weather",
  weatherapi: "https://api.weatherapi.com/v1/current.json"
}

let apiUsed = "weatherapi"

export let ajaxURL = {
  api: serverURL[apiUsed],
  key: apiKey[apiUsed],
  initialCity:"Chennai"
}