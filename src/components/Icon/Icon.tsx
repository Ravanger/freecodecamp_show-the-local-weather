import { IconPropTypes } from "./Icon.types"
import styles from "./Icon.module.scss"
import Image from "next/image"

const Icon: React.FC<IconPropTypes> = ({ url }) => {
  const imageUrl = url || "http://trieshield.com/Images/help-icon.png"
  return (
    <div className={styles.icon}>
      <Image src={imageUrl} alt={"weather icon"} layout="fill" />
    </div>
  )
}

export default Icon
