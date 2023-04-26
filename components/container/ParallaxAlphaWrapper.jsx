import React from "react";
import styles from "@/styles/ParallaxWrapper.module.scss";

export default function ParallaxAlphaWrapper({ children, imageUrl }) {
  return (
    <div
      className={styles["parallax-alpha-wrapper"]}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className={styles.overlay} />
      {children}
    </div>
  );
}
