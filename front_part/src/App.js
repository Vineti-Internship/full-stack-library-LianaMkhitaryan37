import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.PureComponent {
  constructor() {
      super();
      this.state = { isLoading: true,  data: null}
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({isLoading: false ,data }));
  }

  render() { 
    if(this.state.isLoading){
      return null;
    }
    // else{
      console.log(this.state.data)
      return (
      <div className="App">
        <h1>Data Fetched </h1>
      </div>
    )
  
  }
}

export default App;
