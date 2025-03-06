import styles from "./Hero.module.css"
import mobileBackground from "../../../assets/images/bg-intro-mobile.svg"
import desktopBackground from "../../../assets/images/bg-intro-desktop.svg"
import imageMockups from "../../../assets/images/image-mockups.png"
import Container from "../../common/Container"
import ButtonCta from "../../common/ButtonCta"

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__background}>
        <div className={styles.hero__background1}>
          <picture>
            <source media="(min-width: 992px)" srcSet={desktopBackground} />
            <img src={mobileBackground} alt="Easybank background" />
          </picture>
        </div>

        <div className={styles.hero__background2}>
          <img src={imageMockups} alt="Easybank" />
        </div>
      </div>

      <Container className={styles.hero__container}>
        <div className={styles.hero__content}>
          <header className={styles.hero__title}>
            <h1>Next generation digital banking</h1>
          </header>

          <p className={styles.hero__text}>Take your financial life online. Your Easybank account will be a one-stop-shop for
          spending, saving, budgeting, investing, and much more.</p>

          <ButtonCta />
        </div>
      </Container>
    </section>
  )
}

export default Hero