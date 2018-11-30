import React from 'react';

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
    ChangeInfo(){
        // try{
        try {
            (async () => {
            await fetch(`http://localhost:3000/api/v1/authors/${this.props.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type':'application/x-www-form-urlencoded' },
                body: JSON.stringify({author: ''})
            });
            // console.log(JSON.stringify({author:this.state}))
        })();
        } catch(ex) {
            console.error('ex:', ex);
        }

            // console.log(JSON.stringify({author:this.state}))   
            //     fetch(`http://localhost:3000/api/v1/authors/${this.props.id}`, {
            //         method: 'PATCH',
            //         body:  JSON.stringify({author:this.state})
            //     })
            //     .then((r)=>console.log(r));  
            // const $=window.$;
        //     $.ajax({
        //         headers : {
        //             'Accept' : 'application/json',
        //             'Content-Type' : 'application/json'
        //         },
        //         url : `http://localhost:3000/api/v1/authors/${this.props.id}`,
        //         type : 'PATCH',
        //         data : JSON.stringify({author:this.state}),
        //         success : function(response, textStatus, jqXhr) {
        //             console.log("Venue Successfully Patched!");
        //         },
        //         error : function(jqXHR, textStatus, errorThrown) {
        //             // log the error to the console
        //             console.log("The following error occured: " + textStatus, errorThrown);
        //         },
        //         complete : function() {
        //             console.log("Venue Patch Ran");
        //         }
        //     });
        //   }
        //   catch(e){
        //     console.log(e);
        //   }
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
                <button type="button"  data-dismiss="modal" aria-hidden="true" onClick={() => {this.ChangeInfo()}} className="btn btn-primary btn-lg btn-block login-btn">Edit</button>
            </div>
        </React.Fragment>            
        )
    }
}


