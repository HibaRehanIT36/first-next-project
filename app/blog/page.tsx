import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
const Blog = () => {
  return (
    <div className={styles.mainContainer}>
        <Link href={`/blog/88`} className={styles.container} key={1}>
          <div className={styles.imageContainer}>
            <Image
              src='/websites.jpg'
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>title</h1>
            <p className={styles.desc}>desc</p>
          </div>
        </Link>

    </div>
  )
}

export default Blog