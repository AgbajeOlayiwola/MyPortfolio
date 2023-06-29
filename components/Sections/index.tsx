import React, { useState, useEffect } from "react";
import Cover from "../Cover";
import Image from "next/image";
import styles from "./styles.module.css";

const Sections = ({ paragraph, layout, image }) => {
  const [width, setWidth] = useState(0);

  const [height, setHeight] = useState(0);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    console.log(width);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [width]);
  return (
    <div className={styles.sections}>
      <div className={layout === "flexNormmal" ? styles.flex1 : styles.flex2}>
        <div>
          <p className={`hero-section-desc ${styles.para}`}>{paragraph}</p>
        </div>
        <div>
          <Image
            src={image}
            width={width < 990 ? 300 : 800}
            height={width < 990 ? 190 : 500}
            alt="telidoc"
          />
        </div>
      </div>
    </div>
  );
};

export default Sections;