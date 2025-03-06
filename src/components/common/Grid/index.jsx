import { useState } from "react"
import styles from "./Grid.module.css"

const Grid = ({ children, columns, gap }) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth))

    return (
        <div
            className={styles.grid}
            style={{
                gridTemplateColumns: screenWidth >= 992 ? `repeat(${columns}, 1fr)` : "",
                gap: `${gap}px`
            }}>{children}</div>
    )
}

export default Grid