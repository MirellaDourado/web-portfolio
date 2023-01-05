import React from "react";

function Projects({ project, projectNumber }) {
 return(
  <div className="project">
    <h2 color="red">
      <span> { project } </span>
      <span> .{ projectNumber } </span>
    </h2>
  </div>
 );
}

export default Projects;
