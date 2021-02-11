import React from 'react'


class Dropdown extends React.Component {
    render() {
        return (
            
          <select 
            value={this.props.currentValue}
            onChange={this.props.handleChange}
            >    
            {
                this.props.options.map(listItem => <option value={listItem}> {listItem}</option>)
            }
          </select>
                
        
        )
    }
}

export default Dropdown;


