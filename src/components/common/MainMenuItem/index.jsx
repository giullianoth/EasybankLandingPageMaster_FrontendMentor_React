import styles from "./MainMenuItem.module.css"

const MainMenuItem = ({ menu, url }) => {
    return (
        <li className={styles.mainMenuItem}>
            <a href={url}>{menu}</a>
        </li>
    )
}

export default MainMenuItem