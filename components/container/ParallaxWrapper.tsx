import React from "react";
import styles from "@/styles/ParallaxWrapper.module.scss";

interface ParallaxWrapperProps {
  children: React.ReactNode;
  imageUrl: string;
}

export default function ParallaxWrapper({ children, imageUrl }: ParallaxWrapperProps): React.ReactElement {
  return (
    <div
      className={styles.parallaxWrapper}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {children}
    </div>
  );
}
