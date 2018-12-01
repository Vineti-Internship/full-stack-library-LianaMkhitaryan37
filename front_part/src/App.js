import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {AuthorContext,BookContext} from './context/authors_context'
// import Book from './components/book'
import Author from './components/author';
import Book from './components/book';
import CreateButton from './components/createButton';

class App extends React.PureComponent {
  constructor() {
      super();
      this.state = { 
        isLoading: true,  
        tabSelBook : false,
        data: null,
        books:{ data : null},
      }
    }
    deleteFromContext = (id) => {
      const ncontext = [...this.state.data];
      const index = ncontext.findIndex(x => x.id===id)
      ncontext.splice(index,1)
      this.setState({data : ncontext})
    }
    addToContext =(newElem) =>{
      const ncontext = [...this.state.data,newElem];
      this.setState({data : ncontext})
    }
    updateContext= (id,el) =>{
      const ncontext = [...this.state.data];
      const i = ncontext.findIndex(x => x.id===id)
      ncontext[i] ={...ncontext[i],...el};
      console.log(ncontext)
      this.setState({data : ncontext})
    }
  toggleMenu =() =>{
    this.setState({tabSelBook : !(this.state.tabSelBook)})
  }
  addBook=(newElem) =>{
    const ncontext = [...this.state.books,newElem];
    this.setState({books : ncontext})
  }
  // isLoading: false ,
  componentDidMount() {
    try{
      fetch('http://localhost:3000/api/v1/authors')
      .then(response => response.json())
      .then(data => {
        this.setState({data })
        try{
          fetch('http://localhost:3000/api/v1/books')
          .then(response => response.json())
          .then(d =>  this.setState({isLoading: false ,books: d }))
        }
        catch(e){
          console.log(e);
        }
      }
      );

    }
    catch(e){
      console.log(e);
    }
  }


  render() { 
    if(this.state.isLoading){
      return null;
    }   
    else if(!this.state.tabSelBook){ 
      return (
        <React.Fragment>
        <AuthorContext.Provider value={
         {  data: this.state.data,deleteAction:this.deleteFromContext,
          updateContext: this.updateContext,
          addToContext: this.addToContext
        }

          }>
          <div className="App container">
            <ul className="nav nav-tabs">
             <li className="nav-item">
             
              <span className="nav-link active" > Authors </span>
              <CreateButton  />
              </li>
              <li className="nav-item">
                <span className="nav-link"  onClick={this.toggleMenu} >Books</span>
              </li>
            </ul>      
           <BookContext.Provider value={
          { 
            books: this.state.books,
            addBook: this.addBook
          }} >
            <Author /> 
              </BookContext.Provider>
            {/* handleAdd={this.state.addToContext} */}
           
          </div>
        </AuthorContext.Provider>
 
     
        </React.Fragment>
    )
   }
   else{
    return (
      <BookContext.Provider value={
       { 
        books: this.state.books,
        // ,deleteAction:this.state.deleteFromContext,
        // updateContext: this.state.updateContext,
        addBook: this.addBook
      }

        } >
        <div className="App container">
          <ul className="nav nav-tabs">
           <li className="nav-item">
           
            <span className="nav-link "  onClick={this.toggleMenu} > Authors </span>
            </li>
            <li className="nav-item">
              <span className="nav-link active">Books</span>
            </li>
          </ul>
          <Book />        
        </div>
      </BookContext.Provider>
  )
   }
  }
}

export default App;
