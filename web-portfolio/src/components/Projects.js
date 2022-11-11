import React, { Component } from 'react';
import '../style/Projects.css';

class Projects extends Component {
  render(){
    return(
      <section className="projects">
      <h2>Projects</h2>
      <div className='project'> 
        <h3>TrybeTunes</h3>
      </div>
      <div className='sideBySide'>
      <div className='projectX'>
        <h3> Pixel Art </h3>
      </div>
      <div className='projectX'> 
        <h3> TryUnfo </h3>
      </div>
      </div>
      <div className='project'> 
        <h3> KOGUE! </h3>
      </div>
      </section>
    );
  }
}

export default Projects;
