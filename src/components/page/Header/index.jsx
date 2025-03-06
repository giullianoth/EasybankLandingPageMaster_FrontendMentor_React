import Container from "../../common/Container"
import styles from "./Header.module.css"
import logo from "../../../assets/images/logo.svg"
import MainMenu from "../../common/MainMenu"
import ButtonCta from "../../common/ButtonCta"

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.header__container}>
        <div className={styles.header__logo}>
          <h1>Easybank</h1>

          <a href="#">
            <img src={logo} alt="Easybank" />
          </a>
        </div>

        <MainMenu />

        <div className={styles.header__cta}>
          <ButtonCta />
        </div>
      </Container>
    </header>
  )
}

export default Header