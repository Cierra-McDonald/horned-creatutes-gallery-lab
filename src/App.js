import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Images from './data.js'
import MyHeader from './Components/Header';
import MyImageList from './Components/ImageList';

class App extends React.Component {
    state = { 
      animals: Images

    
    }
    
    
    handleChange = (e) => {
      let animalObject = Images.filter(Image => Image.keyword === e.target.value)
      this.setState({animals: animalObject})
      console.log(this.state)
    }
  render() {
    
  return (
    <div className="App">
      <Router>
        < MyHeader/>
        <form>
          Find a Horned Animal: <br/> 
          <select onChange={this.handleChange}>
            
            <option value="narwhal">Narwhal</option>
            <option value="rhino">Rhino</option>
            <option value="unicorn">Unicorn</option>
            <option value="unilego">Unilego</option>
            <option value="triceratops">Triceratops</option>
            <option value="markhor">Markhor</option>
            <option value="mouflon">Mouflon</option>
            <option value="addax">Addax</option>
            <option value="chameleon">Chameleon</option>
            <option value="lizard">Lizard</option>
            <option value="dragon">Dragon</option>
          </select>
          {/* <button onClick={this.submitEvent}>Submit</button> */}
        </form>
        < MyImageList imageProp={this.state.animals}/>
      </Router>
    </div>
  );
  }
}

export default App;

