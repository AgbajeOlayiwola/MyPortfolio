import React from "react";
import Cover from "../Cover";
import styles from "./styles.module.css";
import linkedInAnimation from "../Lotties/linkedin.json";
import gitHubAnimation from "../Lotties/github.json";
import Lottie from "react-lottie";
import Link from "next/link";
const ContactSection = () => {
  const linkedinOptions = {
    loop: true,
    autoplay: true,
    animationData: linkedInAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const gitHubOptions = {
    loop: true,
    autoplay: true,
    animationData: gitHubAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={styles.overlay}>
      <Cover>
        <div className={styles.alCover}>
          <div className={styles.contactArea}>
            <form className={styles.form}>
              <div className={styles.inputs}>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="email" />
                <input type="text" placeholder="Subject" />
              </div>
              <div className={styles.textarea}>
                <textarea cols={28} rows={10} placeholder="Message" />
                <input type="submit" />
              </div>
            </form>
          </div>
          <div>
            <Link
              href="https://www.linkedin.com/in/olaiwola-agbaje-220a10169/"
              target="_blank"
            >
              <Lottie options={linkedinOptions} height={100} width={100} />
            </Link>
            <Link href="https://github.com/AgbajeOlayiwola" target="_blank">
              <Lottie options={gitHubOptions} height={100} width={100} />
            </Link>
          </div>
        </div>
      </Cover>
    </div>
  );
};

export default ContactSection;
