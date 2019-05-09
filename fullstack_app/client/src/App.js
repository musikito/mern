import React, {Component} from 'react';


class App extends Component {

  //initialize our state
  state = {
    data:[],
    id:0,
    word: null,
    intervalIsSet:false
    //we will add the CUD later
  };

/*
  when component mounts, first thing it does is fetch all existing data in our db
   then we incorporate a polling logic so that we can easily see if our db has 
   changed and implement those changes into our UI
 */

componentDidMount(){
  this.getDataFromDb();
  if(!this.state.intervalIsSet){
    let interval = setInterval(this.getDataFromDb, 1000);
    this.setState({intervalIsSet: interval});
  }

}//end of componentDidMount

// never let a process live forever 
  // always kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

// our first get method that uses our backend api to 
  // fetch data from our data base
  getDataFromDb = () =>
  {
    fetch("http://localhost:5000/api/getData")
    .then(data => data.json())
    .then(res => this.setState({data: res.data}));
  };//end of getDataFromDb


  render(){
    return <div>Starting the back end journey!</div>
  }
}

export default App;
