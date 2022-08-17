import type { NextPage } from "next"
import { useState, useEffect } from "react"
import Header from "../components/Header"
import ScrollToTopButton from "../components/ScrollToTopButton"
import Wrapper from "../components/Wrapper"
import { NextSeo } from "next-seo"
import WeatherInfo from "../components/WeatherInfo"
import { WeatherAPIDataType } from "../util/types"

const Home: NextPage = () => {
  const [weatherApiData, setWeatherApiData] = useState<WeatherAPIDataType>()
  const [isCelsius, setIsCelsius] = useState(true)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        fetch(
          `https://weather-proxy.freecodecamp.rocks/api/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}`
        )
          .then((res) => res.json())
          .then((data: WeatherAPIDataType) => {
            setWeatherApiData(data)
          })
      })
    }
  }, [])

  return (
    <Wrapper>
      <NextSeo
        title="Show the Local Weather"
        description="freeCodeCamp: Show the Local Weather"
        openGraph={{
          title: "Show the Local Weather",
          description: "freeCodeCamp: Show the Local Weather",
          type: "website",
          site_name: "Show the Local Weather",
        }}
        twitter={{
          handle: "@BRossovsky",
          site: "@BRossovsky",
          cardType: "summary",
        }}
        additionalMetaTags={[
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          },
        ]}
      />
      <Header title="Show me the Weather!" />
      <WeatherInfo
        weatherApiData={weatherApiData}
        isCelsius={isCelsius}
        toggleCelsius={() => setIsCelsius(!isCelsius)}
      />
      <ScrollToTopButton />
    </Wrapper>
  )
}

export default Home
