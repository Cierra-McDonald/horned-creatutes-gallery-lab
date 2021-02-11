import React from 'react';

class MyImageItem extends React.Component {
    render() {
        return (
            <div className="image-container">
                <img className="images" src={this.props.animalProp.url} alt=""/>
                <div className="images">{this.props.animalProp.title}</div>
                <div className="images">{this.props.animalProp.horns}</div>
                {/* <div class="images">{this.props.animalProp.description}</div>
                <div class="images">{this.props.animalProp.keyword}</div> */}
            </div>
        )
    }
}
export default MyImageItem;