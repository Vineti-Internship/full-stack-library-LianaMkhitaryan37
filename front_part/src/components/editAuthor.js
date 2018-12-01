import React from 'react';
import { AuthorContext } from '../context/authors_context';

export class AuthorInfo extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            FullName: props.FullName,
            email: props.email,
            imageUrl : props.imageUrl,
            bio :props.bio
        }
    }
    onChangeFN(value){
        this.setState({
            FullName: value
        });
    }
    onChangeEm(value){
        this.setState({
            email: value
        });
    }
    onChangeIm(value){
        this.setState({
            imageUrl: value
        }); 
    }
    onChangeBio(value){
        this.setState({
            bio: value
        }); 
    }
    ChangeInfo(url,m,c =null){
        if(this.state.FullName && this.state.email && this.state.imageUrl && this.state.bio ){
            try {
                // `http://localhost:3000/api/v1/authors/${this.props.id}`
            //  (async () => {
                fetch(url, {
                    method: m,//'PATCH',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({author:this.state })
                }).then( (re) => {
                    if(re.ok){
                        if(c) 
                            //c.addToContext(re);
                            re.json().then(data => c.addToContext(data ));
                        }
                   
                    else {
                        alert("Somethingg went wrong; Email must be unique ");
                        console.clear();
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
                <input type="text" onChange={e => this.onChangeFN(e.target.value)}  value={this.state.FullName} className="form-control" placeholder="FullName" required="required" />
            </div>
            <div className="form-group">
                <input type="email" onChange={e => this.onChangeEm(e.target.value)} value={this.state.email} className="form-control" placeholder="Email" required="required" />
            </div>
            <div className="form-group">
                <input type="url"  onChange={e => this.onChangeIm(e.target.value)} value={this.state.imageUrl} className="form-control" placeholder="Image Url " required="required" />
            </div>
            <div className="form-group">
                <textarea rows="7"  onChange={e => this.onChangeBio(e.target.value)} className="form-control" value={this.state.bio} placeholder="Edit Bio" required="required" />
            </div>
            <div className="form-group">
                 <AuthorContext.Consumer>
                 {(context) => (
                   (this.props.type==="Edit")?
                    <button type="button"  data-dismiss="modal" aria-hidden="true" onClick={() => {
                        this.ChangeInfo(`http://localhost:3000/api/v1/authors/${this.props.id}`,'PATCH');
                        // console.log(this.props)
                        context.updateContext(this.props.id,this.state)
                    }} className="btn btn-primary btn-lg btn-block login-btn">Edit</button> : 
                    <button type="button"  data-dismiss="modal" aria-hidden="true" onClick={() => {
                        this.ChangeInfo("http://localhost:3000/api/v1/authors/",'POST',context);
                        // console.log(this.props)
                        //context.addToContext(this.state)
                    }} className="btn btn-primary btn-lg btn-block login-btn">Add new Author</button> 
                 )}
                </AuthorContext.Consumer>
            </div>
        </React.Fragment>            
        )
    }
}


// {...this.state,id:this.props.id}