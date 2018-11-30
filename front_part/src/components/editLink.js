import React from "react"
import Modal from "./modal"

class EditLink extends React.PureComponent{
    constructor(props) {
        super(props);
        this.handleModalShowClick = this.handleModalShowClick.bind(this);
        this.handleModalCloseClick = this.handleModalCloseClick.bind(this);
        this.state = {
          showModal: false,
        }
      }
      handleModalShowClick(e) {
        e.preventDefault();
        // alert('aaaaaaaa;');
        this.setState({
          showModal: true
        })
      }
    
      handleModalCloseClick() {
        this.setState({
          showModal: false
        })
      }
       
    render() {
        return (
            <React.Fragment>
                <span onClick={this.handleModalShowClick}  className="card-link">Edit</span>    
                {this.state.showModal ? (
                    <Modal handleModalCloseClick={this.handleModalCloseClick}>
                       {this.props.children}
                    </Modal> 
                 
                ) : null}
            </React.Fragment>     
        );
    }

}
export default EditLink