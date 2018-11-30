import React from 'react';
import {AuthorContext} from '../context/authors_context'
import EditLink from './editLink';
import {AuthorInfo} from './editAuthor';
import {Delete} from './deleteLink';
class Author extends React.Component {

  createThumbnails = (authors) => {
    // console.log(authors);
    let Thumbnails = []
    authors.forEach((element,index) => {
      Thumbnails.push(
      <div className='card col-md-3 col-sm-5 col-lg-3' key={element.id}>
        <img src = {element.imageUrl} className="card-img-top" alt={element.FullName}/>
        <div className="card-body">
          <h5 className="card-title">{element.FullName}</h5>
          <p className="card-text">{element.bio}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Email : {element.email}</li>
          <li className="list-group-item"> {(element.books.length>0)?`Last Added Book:${element.books[element.books.length-1].title}` :"This author doesn't have added books yet" }</li>
        </ul>
        <div className="card-body">
        {/* handleClick={authors.deleteAuthor(index)}  index={index} */}
          <Delete id={element.id} index ={element.index}/>
          <EditLink>
                <AuthorInfo 
                  FullName= {element.FullName} 
                  email={element.email}
                  imageUrl={element.imageUrl}
                  bio={element.bio}
                  id={element.id}
                />
          </EditLink>
          {/* <a href="#" className="card-link">Edit</a> */}
       </div>
      </div>

      )
    });

    return Thumbnails
  }
    render(){
      return(
        <AuthorContext.Consumer>
        {(context) => (
          <div className='container row' >
            {this.createThumbnails(context[0])}
          </div>
        )}
        </AuthorContext.Consumer>
      );
    }
  };
  
  export default Author;