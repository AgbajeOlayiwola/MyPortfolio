import React from "react";
import styles from "./styles.module.css";
import Cover from "../Cover";
import Image from "next/image";
import Sections from "../Sections";

const AboutMe = () => {
  return (
    <Cover>
      <div className={styles.aboutMe}>
        <div>
          <h1 className={`hearo-section-title ${styles.heading}`}>About Me</h1>
          <p className={`hero-section-desc ${styles.aboutParagraph}`}>
            As a dedicated and results-driven front-end engineer with 1+ years
            of experience, I specialize in building dynamic and intuitive user
            interfaces using ReactJS. My expertise lies in crafting engaging web
            experiences that seamlessly blend functionality, performance, and
            aesthetics. <br />
            <br />
            <br />I am experienced in leveraging modern front-end frameworks and
            libraries, such as NextJS, Framer Motion, and React-ChartJS2, to
            create seamless user experiences that meet the highest industry
            standards. With a strong foundation in HTML5, CSS3, and responsive
            design, I ensure cross-browser compatibility and optimize
            performance across different devices. <br />
            <br />I am adept at utilizing CSS frameworks, such as Tailwind CSS,
            to streamline the styling process and deliver visually stunning
            interfaces. <br />
            <br />
          </p>
          <Sections
            paragraph={
              "Passionate about continuous learning, I stay updated with emerging trends and technologies in the front-end space. I thrive in fast-paced environments, constantly seeking opportunities to expand my skill set and tackle new challenges head-on. If you are seeking a front-end engineer who is driven, technically proficient, and committed to delivering exceptional results, lets connect. I am eager to contribute my expertise and collaborate on impactful projects that push the boundaries of web development."
            }
            layout="flex"
            image="/form.png"
          />
          <Sections
            paragraph={
              "Proficient in the latest front-end technologies, I have a proven track record of delivering high-quality projects from concept to deployment. With a deep understanding of ReactJs component-based architecture and state management solutions, such as Context API and Redux, I excel at creating reusable and scalable code that maximizes efficiency and maintainability."
            }
            layout="flexNormmal"
            image={"/telidoc/landingpage.png"}
          />
          <br />
          <Sections
            paragraph={
              "Collaboration isat the heart of my work. I have successfully worked with cross-functional teams, including UI/UX designers, back-end developers, and project stakeholders, to bring visions to life. My effective communication skills and ability to translate complex technical concepts into actionable insights enable me to align project goals and drive successful outcomes. Throughout my career, I have contributed to various projects, ranging from building robust e-commerce platforms to developing interactive data visualization tools."
            }
            layout="flex"
            image={"/MySmeApp/payments.png"}
          />
        </div>
      </div>
    </Cover>
  );
};

export default AboutMe;
