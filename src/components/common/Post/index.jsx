import styles from "./Post.module.css"

const Post = ({ cover, title, description, author, url }) => {
    return (
        <article className={styles.post}>
            <div className={styles.post__cover}>
                <a href={url}>
                    <img src={cover} alt={title} title={title} />
                </a>
            </div>

            <div className={styles.post__info}>
                <p className={styles.post__author}>By {author}</p>

                <header className={styles.post__title}>
                    <h2>
                        <a href={url}>{title}</a>
                    </h2>
                </header>

                <p className={styles.post__description}>{description}</p>
            </div>
        </article>
    )
}

export default Post