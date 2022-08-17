import { WeatherAPIDataType } from "../../util/types"

export type WeatherInfoPropTypes = {
  weatherApiData?: WeatherAPIDataType
  isCelsius: boolean
  toggleCelsius: () => void
}
