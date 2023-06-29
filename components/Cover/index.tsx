import React from "react";
import styles from "./styles.module.css";

const Cover = ({ children }: { children: any }) => {
  return (
    <div className={styles.outerCover}>
      <div className={styles.innerCover}>{children}</div>
    </div>
  );
};

export default Cover;
