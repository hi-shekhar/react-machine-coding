import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import "../styles/ProjectPage.css";

const ProjectPage = () => {
  const { projectId } = useParams<string>();
  console.log("projectId");
  const project = projects.find((project) => project.id === projectId);
  console.log(project);
  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project not found!</h2>
        <p>The requested project ID `{projectId}` does not exist.</p>
        <Link to="/">Go back to Home</Link>
      </div>
    );
  }

  return (
    <div className="project-page-container">
      <Link to="/" className="back-link">
        &larr; Go back to Home
      </Link>
      <h1 className="project-title">{project.name}</h1>
      <p className="project-detail">
        Status: <strong>{project.status}</strong>
      </p>
      <div className="project-content"></div>
    </div>
  );
};

export default ProjectPage;
