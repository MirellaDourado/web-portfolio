import React, { Component } from 'react';
import '../style/Projects.css';
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from 'react-router-dom'
import TrybetunesIMG from '../img/TrybetunesIMG.png'

class Projects extends Component {
  render(){
    return(
      <section className="projects" id='projects'>
      <h2>Projects</h2>
      <Link to="/trybetunes">
        <div className='project'>
          <div className='area'> <p>01</p> <h3>TrybeTunes</h3> <p><BsArrowUpRight/></p></div> 
          <img src={ TrybetunesIMG } alt='TrybeTunes'/>
        </div>
      </Link>
      </section>
    );
  }
}

export default Projects;
