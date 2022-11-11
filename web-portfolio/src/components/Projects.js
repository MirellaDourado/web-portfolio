import React, { Component } from 'react';
import '../style/Projects.css';
import { BsArrowUpRight } from "react-icons/bs";

class Projects extends Component {
  render(){
    return(
      <section className="projects" id='projects'>
      <h2>Projects</h2>
      <div className='project'>
        <div className='area'> <p>01</p> <p><BsArrowUpRight/></p></div> 
        <h3>TrybeTunes</h3>
      </div>
      <div className='sideBySide'>
      <div className='projectX'>
      <div className='area'> <p>02</p> <p><BsArrowUpRight/></p></div> 
        <h3> Pixel Art </h3>
      </div>
      <div className='projectX'> 
      <div className='area'> <p>03</p> <p><BsArrowUpRight/></p></div> 
        <h3> Trunfo </h3>
      </div>
      </div>
      <div className='project'> 
      <div className='area'> <p>04</p> <p><BsArrowUpRight/></p></div> 
        <h3> KOGUE! </h3>
      </div>
      </section>
    );
  }
}

export default Projects;
