import React, { useContext, useState } from "react";
import useCollapse from "react-collapsed";
import { ThemeContext } from "../../../App";
import Modal from "../../modal/modal";
import "./projectCard.css";
function ProjectCard({ project }) {
  // const [isIndex, setIndex] = useState("");
  const colorTheme = useContext(ThemeContext);
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  // const checkUser = (index) => {
  //   if (isIndex !== index) {
  //     setIndex(index);
  //   }
  //   return colorTheme.showModalHandler;
  // };
  return (
    <div className={`project-card ${colorTheme.theme}`}>
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <p className="project-description">{project.description}</p>
        <section {...getCollapseProps()}>
          {project.about} <br />{" "}
          <p className="tech-stack-sec">
            <span className="tech-stack">Tech stack: </span>
            {project.techStack}
          </p>
        </section>
        {/* <button
          className="view-more-btn"
          key={project.id}
          onClick={colorTheme.showModalHandler}
        >
          View More
        </button> */}
        {/* {colorTheme.modalIsShown && (
          // <Modal>
          <div>
            <p className="project-description" key={project.id}>
              {project.about}
            </p>
            <button className="close-btn" onClick={colorTheme.hideModalHandler}>
              Close
            </button>
          </div>
          // </Modal>
        )} */}
        {/* <p className="project-about">{project.description}</p> */}
        {/* <div className="project-tags">
          {project.tags.map((tag) => {
            return <label className="tag">{tag}</label>;
          })}
        </div> */}
        <div className="project-links">
          {project.demo && (
            <a className="project-link" href={project.demo}>
              <div className="link-button">
                <i className="fi-rr-globe link-icon"></i>Demo
              </div>
            </a>
          )}
          {project.github && (
            <a className="project-link" href={project.github}>
              <div className="link-button">
                <i class="devicon-github-original colored link-icon"></i>Github
              </div>
            </a>
          )}
        </div>
        <button
          className="view-more-cta"
          {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
          })}
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
      </div>
      {/* <img src={project.image} className='project-picture'/> */}
    </div>
  );
}

export default ProjectCard;
