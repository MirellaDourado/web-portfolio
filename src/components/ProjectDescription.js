import React from "react";
// import Projects from "./Projects";
import { Link } from 'react-router-dom';

function ProjectDescription({ project, description1, description2, tools, img, gitUrl, projectUrl }){
  return(
    <div className="project-description" id={ project }>
      <div className="descrip">
        <h2>
          { project }
        </h2>
        <p>
          <span> { description1 } </span>
          <span> { description2 } </span>
        </p>
      </div>
      <img  src={ img } alt={ project } />
      <div className="buttons-div">
        <div className="colored-border">
          <Link to={ { pathname: projectUrl } } target="_blank">
            Preview
          </Link>
        </div>
        <div className="colored-border">
          <Link to={ { pathname: gitUrl } } target="_blank">
            View Code
          </Link>
        </div>
      </div>
      <div className="tools-list">
        <h3>TOOLS</h3>
        <ul>
          { tools.map((t) => (
            <li key={ `${project}-${t}` }> { t } </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectDescription