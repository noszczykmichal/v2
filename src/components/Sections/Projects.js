/* eslint-disable no-lone-blocks */
/* eslint-disable prettier/prettier */
import "./Projects.scss";
import { projects } from "../../utils/config";
import Icon from "../Layout/Icon/Icon";

function Projects() {
  return (
    <section>
      <h2 className="numbered-heading">Some Things I&apos;ve Built</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.title}>
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
                  <a href={project.repoUrl} aria-label="GitHub Link">
                    <Icon name="Github" />
                  </a>
                  <a
                    href={project.liveUrl}
                    aria-label="External Link"
                    className="external"
                  >
                    <Icon name="External" />
                  </a>
                </div>
              </div>
            </div>
            <div className="project-image">
              <a href={project.liveUrl}>dsd</a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;

{
  /* <div className="project-image">
<a href={external ? external : github ? github : "#"}>
  <GatsbyImage image={image} alt={title} className="img" />
</a>
</div>
</StyledProject> */
}
