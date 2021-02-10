import React from 'react';

export class MyImageItem extends React.Component {
    render() {
        return (
            <div class="image-container">
                <div>{this.props.animalProp.url}</div>
                <div>{this.props.animalProp.title}</div>
                <div>{this.props.animalProp.description}</div>
                <div>{this.props.animalProp.keyword}</div>
                <div>{this.props.animalProp.horns}</div>
            </div>
        )
    }
}
export default MyImageItem;