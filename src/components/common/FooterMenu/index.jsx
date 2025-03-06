import { footerMenu } from "../../../defs/definitions"
import FooterMenuItem from "../FooterMenuItem"
import styles from "./FooterMenu.module.css"

const FooterMenu = () => {
    return (
        <ul className={styles.footerMenu}>
            {footerMenu.map((item, index) => (
                <FooterMenuItem
                    key={`footer-menu-item-${index + 1}`}
                    menu={item.menu}
                    url={item.url} />
            ))}
        </ul>
    )
}

export default FooterMenu