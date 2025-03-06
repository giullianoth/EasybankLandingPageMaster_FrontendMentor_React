import { benefits } from "../../../defs/definitions"
import Benefit from "../../common/Benefit"
import Container from "../../common/Container"
import Grid from "../../common/Grid"
import styles from "./Benefits.module.css"
import iconOnline from "../../../assets/images/icon-online.svg"
import iconBudgeting from "../../../assets/images/icon-budgeting.svg"
import iconOnboarding from "../../../assets/images/icon-onboarding.svg"
import iconApi from "../../../assets/images/icon-api.svg"

const icons = [iconOnline, iconBudgeting, iconOnboarding, iconApi]

const Benefits = () => {
  return (
    <section className={styles.benefits}>
      <Container>
        <div className={styles.benefits__info}>
          <header className={styles.benefits__title}>
            <h1>Why choose Easybank?</h1>
          </header>

          <p className={styles.benefits__text}>We leverage Open Banking to turn your bank account into your financial hub.
            Control your finances like never before.</p>
        </div>

        <Grid columns={4} gap={40}>
          {benefits.map((benefit, index) => (
            <Benefit
              key={`benefit-${index + 1}`}
              icon={benefit.icon(icons[index])}
              title={benefit.title}
              text={benefit.text} />
          ))}
        </Grid>
      </Container>
    </section>
  )
}

export default Benefits