import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Images from './data.js'
import MyHeader from './Components/Header';
import MyImageList from './Components/ImageList';
import Dropdown from './Components/Dropdown';

class App extends React.Component {
    state = { 
      keyword: '',
      horns: '',

    }
    //here I am setting state to change when the user chooses an animal keyword
    handleKeywordChange = (e) => {
     
      this.setState({
        keyword: e.target.value
      })
    }
    //here I am setting state to change when the user chooses a different number of horns...WHEN I setSTATE
    //THE DOM IS UPDATING AND MY COMPONENTS THAT I AM PASSING THIS INFORMATION DOWN TO WILL CHANGE!!
    handleHornChange = (e) => {
      this.setState({
        horns: Number(e.target.value)
      })
    }
    // I deleted my filter function in order to create a new one... so lets do that in the render area
  render() {
    console.log(this.state)
    
    const filteredHornedAnimals = Images.filter((Image) => {
    //if there is no keyword and no horns selected by the user, then show all of my pictures
    if (!this.state.keyword && !this.state.horns) return true;
    //What is your condition?  If there is a keyword selected and there is not a horns selected...what 
    //do I want to happend? 
    if (this.state.keyword && !this.state.horns) { 
      //what I want to happen in this space 
      if (Image.keyword === this.state.keyword) return true;
    }
    if (this.state.horns && !this.state.keyword) {
      //what I want to happen in this space 
      if (Image.horns === this.state.horns) return true; 
    }
    if (this.state.keyword && this.state.horns) { 
      //what I want to happen in this space 
      if(Image.keyword === this.state.keyword && Image.horns === this.state.horns) return true;
    }

    return false;
  });

  return (
    <div className="App">
      <Router>
        < MyHeader/>
        
       Animal Search
        < Dropdown
        currentValue= {this.state.keyword}
        handleChange= {this.handleKeywordChange}
        options={['narwhal', 'rhino', 'unicorn', 'unilego', 'triceratops', 'markhor', 'mouflon', 'addax', 'chameleon', 'lizard', 'dragon']}
        />

        Number of Horns
        < Dropdown
        currentValue = {this.state.horns}
        handleChange = {this.handleHornChange}
        options={[1, 2, 3, 100]}
        />
        < MyImageList filteredHornedAnimals= {filteredHornedAnimals}/>
      </Router>
    </div>
  );
  }
}

export default App;

