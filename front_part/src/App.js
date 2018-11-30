import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {AuthorContext} from './context/authors_context'
// import Book from './components/book'
import Author from './components/author';

class App extends React.PureComponent {
  constructor() {
      super();
      this.state = { 
        isLoading: true,  
        data: null,
        deleteFromContext : (index) => {
          const ncontext = [...this.state.data];
          ncontext.splice(index,1)
          this.setState({data : ncontext})
        }
      }
  }

  componentDidMount() {
    try{
      fetch('http://localhost:3000/api/v1/authors')
      .then(response => response.json())
      .then(data => this.setState({isLoading: false ,data }));
    }
    catch(e){
      console.log(e);
    }
  }


  render() { 
    if(this.state.isLoading){
      return null;
    }    
      return (
        <AuthorContext.Provider value={
          // authors : {
         [   this.state.data,this.state.deleteFromContext]
          // },
          //  this.state.deleteFromContext(i)
          }>
          <div className="App">
            <h1>Authors</h1>
            <Author />

          </div>
        </AuthorContext.Provider>
    )
  
  }
}

export default App;
