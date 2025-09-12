import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import "../styles/ProjectPage.css";
import { componentMap } from "../routes/lazyComponentMap";
import { Suspense } from "react";

const ProjectPage = () => {
  const { projectId } = useParams<string>();
  const project = projects.find((project) => project.id === projectId);
  // Get the component from the lazy map
  const ProjectComponent = projectId ? componentMap[projectId] : null;

  if (!project || !ProjectComponent) {
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
      <div className="project-content">
        <Suspense fallback={<div>Loading Project...</div>}>
          <ProjectComponent />
        </Suspense>
      </div>
    </div>
  );
};

export default ProjectPage;
