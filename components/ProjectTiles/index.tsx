import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Modal from "react-modal";
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
const ProjectTiles = ({
  title,
  image1,
  image2,
  image3,
  shortTitle,
  about,
  moreAbout,
  features,
}: {
  title: string;
  image1: string;
  image2: string;
  image3: string;
  shortTitle: string;
  about: string;
  moreAbout: string;
  features: any;
}) => {
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
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Image src={image1} width={850} height={520} alt="telidocsApp" />
        <h1 className={`hearo-section-title`}>{shortTitle}</h1>
        <p>{about}</p>
        <h1 className={`hearo-section-title`}>Key Featrues</h1>
        <br />
        <br />
        <p className={`hero-section-desc`}>
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
        <p className={`hero-section-desc`}>{moreAbout}</p>
        <br />
        <br />
      </Modal>
    </>
  );
};

export default ProjectTiles;
