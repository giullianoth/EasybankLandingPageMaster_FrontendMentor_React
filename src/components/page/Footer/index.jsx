import Container from "../../common/Container"
import styles from "./Footer.module.css"
import logo from "../../../assets/images/logo2.svg"
import SocialLinks from "../../common/SocialLinks"
import FooterMenu from "../../common/FooterMenu"
import ButtonCta from "../../common/ButtonCta"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footer__container}>
        <div className={styles.footer__logo}>
          <a href="#" className={styles.footer__logoLink}>
            <img src={logo} alt="Easybank" />
          </a>

          <SocialLinks />
        </div>

        <nav className={styles.footer__navigation}>
          <FooterMenu />
        </nav>

        <div className={styles.footer__cta}>
          <ButtonCta />
          <p className={styles.footer__rights}>©{(new Date()).getFullYear()} Easybank. All Rights Reserved</p>
        </div>

        <p className={styles.footer__attribution}>
          Challenge by <a href="https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>.
          Coded by <a href="https://github.com/giullianoth" target="_blank" rel="noopener noreferrer">Giulliano Guimarães</a>.
        </p>
      </Container>
    </footer>
  )
}

export default Footer