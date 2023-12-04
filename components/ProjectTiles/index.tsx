import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import styles from "./styles.module.css";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "50%",
    height: "60%",
    overflow: "scroll",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const mobilecustomStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "85%",
    height: "60%",
    overflow: "scroll",
    marginRight: "0%",
    transform: "translate(-50%, -50%)",
  },
};
const ProjectTiles = ({
  title,
  image1,
  image2,
  image3,
  shortTitle,
  about,
  moreAbout,
  features,
  link
}: {
  title: string;
  image1: string;
  image2: string;
  image3: string;
  shortTitle: string;
  about: string;
  moreAbout: string;
  features: any;
  link:string
}) => {
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
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  const dostuff = () => {
    if (title == "Telidoc") {
      document.body.setAttribute("data-theme", "dark-theme"), openModal();
    } else if (title == "GeekRadius") {
      document.body.setAttribute("data-theme", "sea-theme"), openModal();
    } else if (title == "MySmeApp") {
      document.body.setAttribute("data-theme", "sharp-theme"), openModal();
    } else if (title == "WishCard") {
      document.body.setAttribute("data-theme", "sea-theme"), openModal();
    }
  };
  return (
    <>
    <Link href={link} target='_blank'>
      <div onClick={dostuff} className={styles.mainImage}>
        <Image src={image1} width={400} height={220} alt="telidocsApp" />
        <div className={styles.tellidocOther}>
          <Image src={image2} width={200} height={125} alt="telidocsApp" />
          <Image src={image3} width={200} height={125} alt="telidocsApp" />
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={width > 900 ? customStyles : mobilecustomStyles}
        contentLabel="Example Modal"
      >
        <Image
          src={image1}
          width={width > 900 ? 850 : 230}
          height={width > 900 ? 520 : 120}
          alt="telidocsApp"
        />
        <h1 className={`hearo-section-title`}>{shortTitle}</h1>
        <p className={styles.about}>{about}</p>
        <h1 className={`hearo-section-title`}>Key Featrues</h1>
        <br />
        <br />
        <p className={`hero-section-desc ${styles.about}`}>
          {features.feature1}
          <br />
          <br />
          {features.feature2}
          <br />
          {features.feature3}
          <br />
          <br />
          {features.feature4}
          <br />
        </p>
        <p className={`hero-section-desc  ${styles.about}`}>{moreAbout}</p>
        <br />
        <br />
      </Modal>
      </Link>
    </>
  );
};

export default ProjectTiles;
