export type WeatherAPIDataType = {
  base: string
  clouds: { all: number }
  cod: number
  coord: { lon: number; lat: number }
  dt: number
  id: number
  main: {
    feels_like: number
    humidity: number
    pressure: number
    temp: number
    temp_max: number
    temp_min: number
  }
  name: string
  sys: {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  visibility: number
  weather: {
    description: string
    icon: string
    id: number
    main: string
  }[]
  wind: { speed: number; deg: number }
}
