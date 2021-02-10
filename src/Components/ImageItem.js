import React from 'react';

export class MyImageItem extends React.Component {
    render() {
        return (
            <div className="image-container">
                <img class="images" src={this.props.animalProp.url} alt=""/>
                <div class="images">{this.props.animalProp.title}</div>
                {/* <div class="images">{this.props.animalProp.description}</div>
                <div class="images">{this.props.animalProp.keyword}</div>
                <div class="images">{this.props.animalProp.horns}</div> */} 
            </div>
        )
    }
}
export default MyImageItem;