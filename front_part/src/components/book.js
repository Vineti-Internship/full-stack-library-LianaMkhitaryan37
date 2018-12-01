import React from 'react';
import { BookContext} from '../context/authors_context'

class Book extends React.PureComponent{
    createThumbnails = (books) => {
      console.log(books)
        let Thumbnails = []
        books.forEach((element) => {
        console.log(element);
          Thumbnails.push(
          <div className='card col-md-5 col-sm-5 col-lg-5' key={`book_${element.id}`} >
            <div className="card-body">
              <h5 className="card-title">{element.title}</h5>
              <p className="card-text">{element.description}</p>
            </div>
            

            <ul className="list-group list-group-flush">
           
              <li className="list-group-item">
              Author : {element.authorName}

              </li>
              {/* <li></li>  */}
              {/* <li className="list-group-item"> {(element.books.length>0)?`Last Added Book:${element.books[element.books.length-1].title}` :"This author doesn't have added books yet" }</li> */}
            </ul>
            <div className="card-body">
            <span className="card-link">Page Count : {element.numberOfPages}</span>
            <img src={element.thumbnailUrl} style={{ width : "30px", float: "right"}} alt={element.title} />

            </div>
          </div>
          )
        });
    
        return Thumbnails
    }
    render(){
        return(
          <BookContext.Consumer>
          {(context) => (
            <div className='container row' >
              {this.createThumbnails(context.books) }
            </div>
          )}
          </BookContext.Consumer>
        );
    }
}
export default Book;