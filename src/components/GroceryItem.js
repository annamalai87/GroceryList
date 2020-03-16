import React, { Component } from 'react'

export default class GroceryItem extends Component {
  customStyle = isCompleted => {
        if (isCompleted) {
          return {
            textDecoration: 'line-through',
            font: "500px"
          };
        } else {
          return {
            textDecoration: 'none',
            font: "500px"
          };
        }
      };

    render() {
        return (
            <div style={this.customStyle(this.props.todo.isCompleted)}>
                <input type="checkbox" className="grocery-item" onChange={this.props.flip.bind(this.props.todo,this.props.todo.key)}/> { }
                {this.props.todo.name}
            </div>
        )
    }
}
