import React, { Component } from 'react';
//import PropTypes from 'prop-types';

export class todoItem extends Component {

    getStyle = () => {
        if(this.props.todo.completed){
            return{textDecoration: 'line-through'}
        }else{
            return{textDecoration: 'none'}
        }

    }//end of getStyle
   




  render() {
    return (
      <div style={this.getStyle()}>
        <p>{ this.props.todo.title }</p>
      </div>
    )
  }//end of render
}//end of class


export default todoItem
