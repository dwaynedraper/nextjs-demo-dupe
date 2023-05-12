import React from "react";
import styles from "@/styles/ParallaxWrapper.module.scss";

interface ParallaxAlphaWrapperProps {
  children: React.ReactNode;
  imageUrl: string;
}

export default function ParallaxAlphaWrapper({ children, imageUrl }: ParallaxAlphaWrapperProps): React.ReactElement {
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
