import styles from "./Benefit.module.css"

const Benefit = ({ icon, title, text }) => {
  return (
    <article className={styles.benefit}>
        <div className={styles.benefit__icon}>
            <img src={icon} alt={title} />
        </div>

        <header className={styles.benefit__title}>
            <h2>{title}</h2>
        </header>

        <p className={styles.benefit__text}>{text}</p>
    </article>
  )
}

export default Benefit