import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {AuthorContext} from './context/authors_context'
// import Book from './components/book'
import Author from './components/author';
import CreateButton from './components/createButton';

class App extends React.PureComponent {
  constructor() {
      super();
      this.state = { 
        isLoading: true,  
        data: null,
        deleteFromContext : (id) => {
          const ncontext = [...this.state.data];
          const index = ncontext.findIndex(x => x.id===id)
          ncontext.splice(index,1)
          this.setState({data : ncontext})
        },
        addToContext :(newElem) =>{
          // try{
          //   fetch('http://localhost:3000/api/v1/authors')
          //   .then(response => response.json())
          //   .then(data => this.setState({isLoading: false ,data }));
          // }
          const ncontext = [...this.state.data,newElem];
          this.setState({data : ncontext})
        },
        updateContext: (id,el) =>{
          const ncontext = [...this.state.data];
          const i = ncontext.findIndex(x => x.id===id)
          ncontext[i] ={...ncontext[i],...el};
          console.log(ncontext)
          this.setState({data : ncontext})
        }
        // updateContext(){
        //   try{
        //     fetch('http://localhost:3000/api/v1/authors')
        //     .then(response => response.json())
        //     .then(data => this.setState({isLoading: false ,data }));
        //   }
        //   catch(e){
        //     console.log(e);
        //   }
        // }
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
         {  data: this.state.data,deleteAction:this.state.deleteFromContext,
          updateContext: this.state.updateContext,
          addToContext: this.state.addToContext
        }

          }>
          <div className="App">
            <div><span> Authors </span>
            <CreateButton  /></div>
            <Author />
            {/* handleAdd={this.state.addToContext} */}
           
          </div>
        </AuthorContext.Provider>
    )
  
  }
}

export default App;
