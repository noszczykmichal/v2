import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

import "./Projects.scss";
import { projects, srConfig } from "../../utils/config";
import Icon from "../Layout/Icon/Icon";
import ProjectPic from "../UI/ProjectPic/ProjectPic";
import usePrefersReducedMotion from "../../utils/usePrefersReducedMotion";

function Projects() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const prefersReducedMotionRef = useRef(prefersReducedMotion);
  const revealTitle = useRef();
  const revealProjects = useRef([]);

  useEffect(() => {
    if (prefersReducedMotionRef.current) {
      return undefined;
    }

    ScrollReveal().reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, index) =>
      ScrollReveal().reveal(ref, srConfig(index * 100)),
    );

    return () => {};
  }, []);

  return (
    <section id="projects">
      <h2 className="numbered-heading" ref={revealTitle}>
        Some Things I&apos;ve Built
      </h2>
      <ul className="projects-list">
        {projects.map((project, index) => (
          <li
            key={project.title}
            className="styled-project"
            ref={(el) => {
              revealProjects.current[index] = el;
            }}
          >
            <div className="project-content">
              <div>
                <p className="project-overline">Featured Project</p>
                <h3 className="project-title">
                  <a href={project.liveUrl}>{project.title}</a>
                </h3>
                <div className="project-description">
                  <p>{project.description}</p>
                </div>
                <ul className="project-tech-list">
                  {project.tech.map((techItem) => (
                    <li key={techItem}>{techItem}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a
                    href={project.repoUrl}
                    aria-label="GitHub Link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon name="Github" />
                  </a>
                  <a
                    href={project.liveUrl}
                    aria-label="External Link"
                    className="external"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon name="External" />
                  </a>
                </div>
              </div>
            </div>
            <div className="project-image">
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                <ProjectPic
                  imageSrc={project.imagePath}
                  className="image-wrapper"
                />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
