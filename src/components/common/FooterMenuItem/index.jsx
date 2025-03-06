import styles from "./FooterMenuItem.module.css"

const FooterMenuItem = ({ menu, url }) => {
    return (
        <li className={styles.footerMenuItem}>
            <a href={url}>{menu}</a>
        </li>
    )
}

export default FooterMenuItem