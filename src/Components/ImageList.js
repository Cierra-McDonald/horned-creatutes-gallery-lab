import React from 'react';
import MyImageItem from './ImageItem';


class MyImageList extends React.Component {
    
    
    
    render() {
       
        return (
            < ul class="image-list">
                {this.props.filteredHornedAnimals.map(singleAnimalObject => 
            <MyImageItem 
            key={singleAnimalObject.title}
            animalProp={singleAnimalObject}
            />)}
            </ul>
            
        )
    }
}

export default MyImageList;


