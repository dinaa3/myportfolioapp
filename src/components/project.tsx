import { projects } from '../portofolio';
import ProjectContainer from './projectContainer';
import "../styles/project.css"

const Projects: React.FC = () => {
  if (!projects.length) return null;

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>

      <div className="projects__grid">
        {projects.map((project, index) => (
          <ProjectContainer key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
