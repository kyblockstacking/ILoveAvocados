import React, { Component } from 'react';

// css
import './App.css';

// components
import NavBar from './Components/NavBar';
import JumboTron from './Components/JumboTron';
import InbetweenText from './Components/InbetweenText';
import ImageCarousel from './Components/ImageCarousel';
import Button from './Components/Button';
import TextArea from './Components/TextArea';
import CreateImage from './Components/CreateImage';
import FlavorImages from './Components/FlavorImages';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <JumboTron />
        <InbetweenText>EXPLORE THE POSSIBILITIES</InbetweenText>
        <TextArea>
          "The avocado serves as a culinary chameleon — something that can go with a variety of dishes while disguised in many different ways. And including avocados as a main ingredient in sauces gives chefs the ability to customize a number of dishes with varying flavor profiles."<br />
          - <a href='https://avocadosfrommexico.com/foodservice/ask-foodservice/the-possibilities-are-endless-with-sauceabilities-2-0/' target='_blank' rel="noopener noreferrer">
            avocadosfrommexico.com
          </a>
        </TextArea>
        <ImageCarousel />
        <InbetweenText>DISCOVER THE FLAVORS</InbetweenText>
        <TextArea>"Avocado has a rich, buttery and creamy flavor. Depending on what cultivar it is, the avocado can have hints of sweetness as well as a mild, earthy vegetable taste. When it is fully ripe, the avocado can have a delicate, hearty flavor."<br />
          - <a href='https://lovebackyard.com/what-does-avocado-taste-like/' target='_blank' rel="noopener noreferrer">
            lovebackyard.com
          </a></TextArea>
        <Button>Recipes</Button>
        <FlavorImages />
        <InbetweenText>
          LEARN THEIR ORIGIN
        </InbetweenText>
        <Button>
          Origin
        </Button>
        <CreateImage circle='true' thumbnail='true' style={{ display: 'block', margin: '0 auto' }} src={require('./avocado_images/avocado_plant.jpg')} />
      </div>
    );
  }
}

export default App;