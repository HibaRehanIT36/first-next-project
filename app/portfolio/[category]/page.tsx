import Button from '@/app/components/button/Button'
import Image from 'next/image'
import React from "react";
import styles from "./page.module.css";

const Category = ({ params }:any) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

        <div className={styles.item} >
          <div className={styles.content}>
            <h1 className={styles.title}>title</h1>
            <p className={styles.desc}>desc</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src="/websites.jpg"
              alt=""
            />
          </div>
        </div>
    </div>
  )
}

export default Category