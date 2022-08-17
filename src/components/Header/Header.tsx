import styles from "./Header.module.scss"
import { HeaderPropTypes } from "./Header.types"

const Header: React.FC<HeaderPropTypes> = ({ title }) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
    </header>
  )
}

export default Header
