import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
const Post = () => {
  return (
    <div>
      {" "}
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.info}>
            <h1 className={styles.title}>title</h1>
            <p className={styles.desc}>desc</p>
            <div className={styles.author}>
              <Image
                src="/websites.jpg"
                alt=""
                width={40}
                height={40}
                className={styles.avatar}
              />
              <span className={styles.username}>username</span>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="/websites.jpg"
              alt=""
              fill={true}
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.text}>content</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
