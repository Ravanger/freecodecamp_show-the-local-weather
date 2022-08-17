import { TemperaturePropTypes } from "./Temperature.types"
import styles from "./Temperature.module.scss"

const Temperature: React.FC<TemperaturePropTypes> = ({
  temp,
  city,
  country,
  toggleCelsius,
  isCelsius = true,
}) => {
  if (!temp || !city || !country) return null

  // To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.
  return (
    <div className={styles.temperature}>
      <span>{isCelsius ? `${temp}` : `${1.8 * temp + 32}`}°</span>
      <button onClick={toggleCelsius}>{isCelsius ? "C" : "F"}</button>
      <span>{`in ${city}, ${country}`}</span>
    </div>
  )
}

export default Temperature
