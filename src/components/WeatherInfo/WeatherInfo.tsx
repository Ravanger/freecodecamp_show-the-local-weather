import Description from "../Description"
import Icon from "../Icon"
import Spinner from "../Spinner"
import Temperature from "../Temperature"
import { WeatherInfoPropTypes } from "./WeatherInfo.types"

const WeatherInfo: React.FC<WeatherInfoPropTypes> = ({
  weatherApiData,
  toggleCelsius,
  isCelsius = true,
}) => {
  return weatherApiData ? (
    <>
      <Temperature
        temp={weatherApiData.main.temp}
        city={weatherApiData.name}
        country={weatherApiData.sys.country}
        isCelsius={isCelsius}
        toggleCelsius={toggleCelsius}
      />
      <Icon url={weatherApiData.weather[0].icon} />
      <Description description={weatherApiData.weather[0].main} />
    </>
  ) : (
    <Spinner />
  )
}

export default WeatherInfo
