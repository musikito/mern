import React,{ Component} from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id:1,
        title: "Do App",
        completed: true
      },
      {
        id:2,
        title: "Sell App",
        completed: false
      },
      {
        id:3,
        title: "Get Rich",
        completed: false
      }
    ]
  }



  render(){
  return (
    <div className="App">
     <Todos todos = {this.state.todos}/>
    </div>
  );
}
}//end of render

export default App;
