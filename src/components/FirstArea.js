import React, { useEffect } from 'react';
import '../style/FirstArea.css';
import errorVideo from '../assets/videos/Falha36784.mp4'
import previewTrybetunes from '../img/projects/preview-trybetunes.png';
import previewTrunfo from '../img/projects/preview-trunfo.png';
import shopping from '../img/projects/preview-shopping.png';
import SplitText from './SplitText';
import Projects from './Projects';
import ProjectDescription from './ProjectDescription';

function FirstArea() {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    console.log(window.scrollY);
};
  return (
    <main className="firstArea">
      {console.log(window.page)}
      <div className='hero'>
        <video className='videoHero' autoPlay muted loop>
            <source src={ errorVideo } type="video/mp4"/>
        </video>
        <h1> <SplitText copy="FULL STACK DEVELOPER BORN IN 01'S BASED IN BRAZIL " role="heading" /> </h1>
      </div>
      <Projects project="TrybeTunes" projectNumber="01"/>
      <ProjectDescription
        project="TrybeTunes"
        description1="This project simulates a music player such as Itunes. In it, it is possible to search for the most varied bands and singers, add songs to the list of favorites, modify your profile"
        description2="The main focus of this project is understand Components life cycle and React Router based on Trybe's React teachings"
        tools={['React', 'API', 'JavaScript', 'CSS', 'HTML', 'BrowserRouter' ]}
        img={ previewTrybetunes }
        gitUrl="https://github.com/MirellaDourado/Project-TrybeTunes"
        projectUrl="https://trybetunes--nine.vercel.app/"
      />
      <Projects project="Trump" projectNumber="02"/>
      <ProjectDescription
        project="Trump"
        description1="This project simulates the game Trump (card game), the themme of this is based on Super BomberMan. In it, it is possible to create your own deck adding to it the card name, image, description, force, bomb, velocity, rarity and can add one super trump."
        description2="The main focus of this project is understand Events, Forms and State in React.js."
        tools={['React', 'JavaScript', 'CSS', 'HTML' ]}
        img={ previewTrunfo }
        gitUrl="https://github.com/MirellaDourado/Project-TryUnfo"
        projectUrl="https://bombertrunfo.vercel.app/"
      />
      <Projects project="Shopping Cart" projectNumber="03"/>
      <ProjectDescription
        project="Shopping Cart"
        description1="This project simulates a online store online, with Mercado Livre API. In it, it is possible to shearch a product by it's name, by category, simulates and buy cart addying itens to it and removing."
        description2="Since this project was made in group, the main focus of this project is in agile methodologies and application of knowledge about React.js"
        tools={['React', 'JavaScript', 'CSS', 'HTML' ]}
        img={ shopping }
        gitUrl={"https://github.com/tryber/sd-025-b-project-shopping-cart"}
        projectUrl={null}
      />
    </main>
  );
}

export default FirstArea;