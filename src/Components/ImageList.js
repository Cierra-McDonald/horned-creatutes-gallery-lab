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
        const animals = this.props.imageProp
        
        const animalPicture = animals.map(singleAnimalObject => <MyImageItem animalProp={singleAnimalObject} />)
        console.log(this.props.imageProp)
        return (
            <div class="image-list">
            {/* <h2>{this.state.someAnimals}</h2> */}
            {/* <button onClick={this.increment}>Find!</button> */}
            {animalPicture}
            </div>
        )
    }
}

export default MyImageList;


