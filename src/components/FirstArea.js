import React, { useEffect } from 'react';
import '../style/FirstArea.css';
import errorVideo from '../assets/videos/Falha36784.mp4'
import previewTrybetunes from '../img/projects/preview-trybetunes.png';
import previewTrunfo from '../img/projects/preview-trunfo.png';
import shopping from '../img/projects/preview-shopping.png';
import previewTrivia from '../img/projects/preview-trivia.png'
import previewRecipe from '../img/projects/preview-recipe.png'
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
      <Projects project="Online Store" projectNumber="03"/>
      <ProjectDescription
        project="Store"
        description1="This project simulates a online store online, with Mercado Livre API. In it, it is possible to shearch a product by it's name, by category, simulates and buy cart addying itens to it and removing."
        description2="Since this project was made in group, the main focus of this project is in agile methodologies and application of knowledge about React.js"
        tools={['React', 'JavaScript', 'CSS', 'HTML' ]}
        img={ shopping }
        gitUrl={"https://github.com/MirellaDourado/Project-FrontEnd-Online-Store"}
        projectUrl={ "https://onlinestorecart.vercel.app" }
      />
      <Projects project="Trivia Game" projectNumber="04"/>
      <ProjectDescription
        project="Trivia"
        description1="This project simulates the trivia game, with the Gravatar API and Quest API. In it, it is possible to play a simple game and get ranked! If the player have a registration in the Gravatar, his photo will be showed."
        description2="Since this project was made in group, the main focus of this project is in using kanban methodology and application of knowledge about React Redux"
        tools={['React', 'JavaScript', 'CSS', 'HTML', 'Redux', 'BrowserRouter' ]}
        img={ previewTrivia }
        gitUrl={"https://github.com/MirellaDourado/Project-Trivia"}
        projectUrl={ "https://curious-trivia.vercel.app/" }
      />
      <Projects project="Recipe App" projectNumber="05"/>
      <ProjectDescription
        project="Recipe"
        description1="This project simulates a recipe app, with 2 APIs. In it, it is possible search a recipe (Meal recipe or Drink recipe), see the description, start the recipe, finish it, share the recipe link and see your done recipes."
        description2="This project is made to be seen in 360x640. Since this project was made in group, the main focus of this project is in using kanban methodology and application of knowledge about React Redux."
        tools={['React', 'JavaScript', 'CSS', 'HTML', 'React-Hooks', 'Context API', 'BrowserRouter', 'API' ]}
        img={ previewRecipe }
        gitUrl={"https://github.com/MirellaDourado/Project-Recipe-App"}
        projectUrl={ "https://projectrecipe.vercel.app/" }
      />
    </main>
  );
}

export default FirstArea;