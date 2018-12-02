import React from 'react';
import { BookContext} from '../context/authors_context'

class Book extends React.PureComponent{
    createThumbnails = (books) => {
        let Thumbnails = []
        books.forEach((element) => {
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