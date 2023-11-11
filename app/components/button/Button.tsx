import React from "react";
import styles from "./button.module.css";
import Link from "next/link";
type buttonPropType = {
  url: string;
  text: string;
};
const Button = ({ text, url }: buttonPropType) => {
  return (
    <Link href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
};

export default Button;
