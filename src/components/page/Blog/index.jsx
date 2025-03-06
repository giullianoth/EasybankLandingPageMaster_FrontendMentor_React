import { useState } from "react"
import styles from "./Blog.module.css"
import Container from "../../common/Container"
import Grid from "../../common/Grid"
import { posts } from "../../../defs/definitions"
import Post from "../../common/Post"
import cover1 from "../../../assets/images/image-currency.jpg"
import cover2 from "../../../assets/images/image-restaurant.jpg"
import cover3 from "../../../assets/images/image-plane.jpg"
import cover4 from "../../../assets/images/image-confetti.jpg"

const covers = [cover1, cover2, cover3, cover4]

const Blog = () => {
  const [gap, setGap] = useState(window.innerWidth >= 768 ? 20 : 40)
  window.addEventListener("resize", () => setGap(window.innerWidth >= 768 ? 20 : 40))

  return (
    <section className={styles.blog}>
      <Container>
        <header className={styles.blog__title}>
          <h1>Latest Articles</h1>
        </header>

        <Grid columns={4} gap={gap}>
          {posts.map((post, index) => (
            <Post
              key={`post-${index + 1}`}
              cover={post.cover(covers[index])}
              title={post.title}
              description={post.description}
              author={post.author}
              url={post.url} />
          ))}
        </Grid>
      </Container>
    </section>
  )
}

export default Blog