import React, {Component} from 'react';

class Todo extends Component {
    /**
     * State is like a data store to the ReactJS component. 
     * It is mostly used to update the component when a user performs some action like clicking button, 
     * typing some text, pressing some key, etc.
     */
    state = {
        edit: false,
        id: null,
        mockData: [{
          id: '1',
          title: 'Buy Milk',
          done: false,
          date: new Date()
        }, {
          id: '2',
          title: 'Meeting with Ali',
          done: false,
          date: new Date()
        }, {
          id: '3',
          title: 'Tea break',
          done: false,
          date: new Date()
        }, {
          id: '4',
          title: 'Go for a run.',
          done: false,
          date: new Date()
        }]
      }


    render() {
        return(<h1>This Message is from Todo Component</h1>)
    }
}



export default Todo;