import Lottie from "react-lottie";
import Cover from "../Cover";
import { ProjectImages } from "../Data/indexs";
import scrollAnimation from "../Lotties/right.json";
import ProjectTiles from "../ProjectTiles";
import styles from "./styles.module.css";

const Projects = () => {
  const scrollOptions = {
    loop: true,
    autoplay: true,
    animationData: scrollAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Cover>
      <div className={styles.lott}>
        <h1 className={`hearo-section-title`}>Projects</h1>
        <Lottie options={scrollOptions} height={50} width={120} />
      </div>
      <div className={styles.projectsBack}>
        {ProjectImages.map((item, index) => {
          return (
            <ProjectTiles
              key={index}
              link={item.link}
              title={item.title}
              image1={item.image1}
              image2={item.image2}
              image3={item.image3}
              shortTitle={item.shortTitle}
              about={item.about}
              moreAbout={item.moreAbout}
              features={item.features}
            />
          );
        })}
      </div>
    </Cover>
  );
};

export default Projects;
