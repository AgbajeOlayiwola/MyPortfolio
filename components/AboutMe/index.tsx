import Cover from "../Cover";
import Sections from "../Sections";
import styles from "./styles.module.css";

const AboutMe = () => {
  return (
    <Cover>
      <div className={styles.aboutMe}>
        <div >
          <h1 className={`hearo-section-title ${styles.heading}`} data-aos="fade-up">About Me</h1>
          <p className={`hero-section-desc ${styles.aboutParagraph}`} data-aos="fade-up">
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
              "Collaboration is at the heart of my work. I have successfully worked with cross-functional teams, including UI/UX designers, back-end developers, and project stakeholders, to bring visions to life. My effective communication skills and ability to translate complex technical concepts into actionable insights enable me to align project goals and drive successful outcomes. Throughout my career, I have contributed to various projects, ranging from building robust e-commerce platforms to developing interactive data visualization tools."
            }
            layout="flex"
            image={"/MySmeApp/logins.png"}
          />
          <Sections
            paragraph={
              "Proficient in the latest front-end technologies, I have a proven track record of delivering high-quality projects from concept to deployment. With a deep understanding of ReactJs component-based architecture and state management solutions, such as Context API and Redux, I excel at creating reusable and scalable code that maximizes efficiency and maintainability."
            }
            layout="flexNormmal"
            image={"/telidoc/landingpage.png"}
          />

          <Sections
            paragraph={
              "The zino platform was built with nextjs and TypeScript"
            }
            layout="flex"
            image={"/Zino/zino1.png"}
          />
          
          <br />
         
        </div>
      </div>
    </Cover>
  );
};

export default AboutMe;
