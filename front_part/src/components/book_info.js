import React from 'react';
import { BookContext } from '../context/authors_context';

export
class BookInfo extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            numberOfPages: "",
            thumbnailUrl : "",
            description :""
        }
    }
    add = (url,m,c) => {
        if(this.state.title && this.state.numberOfPages && this.state.thumbnailUrl && this.state.description ){
            try {
                fetch(url, {
                    method: m,//'PATCH',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({book:{...this.state,author_id: this.props.id }})
                }).then( (re) => {
                    //console.log({book:{...this.state,id: this.props.id })
                    if(re.ok){
                        if(c) 
                            //c.addToContext(re);
                            re.json().then(data => c.addBook(data ));
                    }                   
                    else {
                        alert("Somethingg went wrong; Try again later");
                        // console.clear();
                    }
                 } );
                // console.log(JSON.stringify({author:this.state}))
            }//)();
            catch(ex) {
                console.error('ex:', ex);
                alert("invalid data")
            }
        }
        else
            alert("insert whole data")
    }
    render(){
        return(
            <React.Fragment>
            <div className="form-group">
                <input type="text" onChange={e => this.setState({title: e.target.value})}  value={this.state.title} className="form-control" placeholder="title" required="required" />
            </div>
            <div className="form-group">
                <input type="number" onChange={e => this.setState({numberOfPages: e.target.value})} value={this.state.numberOfPages} className="form-control" placeholder="Page Count" required="required" />
            </div>
            <div className="form-group">
                <input type="url"  onChange={e => this.setState({thumbnailUrl: e.target.value})} value={this.state.thumbnailUrl} className="form-control" placeholder="Thumbnail Url " required="required" />
            </div>
            <div className="form-group">
                <textarea rows="7"  onChange={e => this.setState({description: e.target.value})} className="form-control" value={this.state.description} placeholder="Edit description" required="required" />
            </div>
            <div className="form-group">
                 <BookContext.Consumer>
                  {(context) => (
                    <button type="button"  data-dismiss="modal" aria-hidden="true" onClick={() => {
                       this.add("http://localhost:3000/api/v1/books/",'POST',context);
                        console.log(context,this.props.id)
                    }} className="btn btn-primary btn-lg btn-block login-btn">Add new Book</button>  
                 )
                }
                 </BookContext.Consumer>
                {/* <BookContext.Consumer>
                    {
                    (context) => (
                     <button type="button" onClick={console.log(context.books)}>button</button>
                    )
                    }
                </BookContext.Consumer> */}
            </div>
        </React.Fragment>            
        )
    }    
}