import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
//import Tddo component here
import Todo from './Todo';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show:false
    };
  }
  render(){
    //use Todo component inside render method
    return(
      <div className="App"><Todo /></div>
      
    );
  }
}

/*

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
