import { useState } from "react"
import styles from "./MainMenu.module.css"
import hamburgerIcon from "../../../assets/images/icon-hamburger.svg"
import closeIcon from "../../../assets/images/icon-close.svg"
import { mainMenu } from "../../../defs/definitions"
import MainMenuItem from "../MainMenuItem"

const MainMenu = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const menuCollapse = () => setOpenMenu(!openMenu)

    return (
        <nav className={styles.mainMenu}>
            <div className={styles.mainMenu__icon} onClick={menuCollapse}>
                <img src={openMenu ? closeIcon : hamburgerIcon} alt={openMenu ? "Close" : "Menu"} />
            </div>

            <div
                className={styles.mainMenu__overlay + `${openMenu ? ` ${styles.mainMenu__visible}` : ""} close`}
                onClick={({ target }) => target.classList.contains("close") && menuCollapse()}>
                <ul className={styles.mainMenu__list}>
                    {mainMenu.map((item, index) => (
                        <MainMenuItem
                            key={`main-menu-item-${index + 1}`}
                            menu={item.menu}
                            url={item.url} />
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default MainMenu