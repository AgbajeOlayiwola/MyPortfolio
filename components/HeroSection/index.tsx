import Image from "next/image";
import { useEffect, useState } from "react";
import Cover from "../Cover";
import styles from "./styles.module.css";

const HeroSection = () => {
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
    <Cover>
      <div className={styles.heroSection}>
        <div></div>
        <div className={styles.heroSectionDiv}>
          <div className={styles.titleSection}>
            <div className={styles.ownwemage}>
              
              <Image src="/portImage.jpg"  data-aos="fade-right" width={160} height={180} alt="ola" />
            </div>
            <h1 className={`hearo-section-title ${styles.heroTitle}`}  data-aos="fade-up-right">
              Hi my Name Is Ola And I Am A Front-End Focused{" "}
              <span className={styles.bentunderline}>Software Engineer</span>
            </h1>
          </div>
          {width < 990 ? null : (
       
            <div className={styles.sideimage}>
              <Image
               data-aos="fade-left"
                src="/crystalone.png"
                width={800}
                height={800}
                alt="sideImage"
              />
         
            </div>
          )}
        </div>
        <div className={styles.skills}>
          <div>
            <h1 className={`hearo-section-title`}  data-aos="fade-right">Front End Development</h1>
          </div>
          <div>
            <h1 className={`hearo-section-title`}  data-aos="fade-down">ReactJs</h1>
          </div>
          <div>
            <h1 className={`hearo-section-title`}  data-aos="fade-right">NextJs</h1>
          </div>
          <div>
            <h1 className={`hearo-section-title`}  data-aos="fade-down">Git/Github/ GitLab</h1>
          </div>
          <div>
            <h1 className={`hearo-section-title`}  data-aos="fade-right">Javascript ES6</h1>
          </div>
          <div>
            <h1 className={`hearo-section-title`} data-aos="fade-down">HTML5/CSS3</h1>
          </div>
        </div>
      </div>
    </Cover>
  );
};

export default HeroSection;
