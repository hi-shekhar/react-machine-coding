import { Link } from "react-router-dom";
import { projects, type Project } from "../data/projects";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="projects-grid">
        {projects.map((project: Project) => (
          <Link
            to={`/projects/${project.id}`}
            key={project.id}
            className="project-card"
          >
            <h3>{project.name}</h3>
            <p className={"project-status " + project.status}>
              Status: <span>{project.status}</span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
