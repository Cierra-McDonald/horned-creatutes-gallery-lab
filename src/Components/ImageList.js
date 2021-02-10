import React from 'react';
import Images from '../data';
import MyImageItem from './ImageItem';


class MyImageList extends React.Component {
    state = { 
        someAnimals : 0
    }
    
    increment = () => { 
        this.setState({ someAnimals: this.state.someAnimals +1 })
    }
    render() {

        
        const animalList = Images.map(singleAnimalObject => < MyImageItem animalProp={singleAnimalObject} />)
        return (
            <div class="image-list">
            {/* <h2>{this.state.someAnimals}</h2> */}
            {/* <button onClick={this.increment}>Find!</button> */}
            {animalList}
            </div>
        )
    }
}

export default MyImageList;


