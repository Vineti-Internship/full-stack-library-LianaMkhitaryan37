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
<<<<<<< HEAD
                <span onClick={this.handleModalShowClick}  className="card-link">{this.props.type}</span>    
                {this.state.showModal ? (
                    <Modal type={this.props.type} handleModalCloseClick={this.handleModalCloseClick}>
=======
                <span onClick={this.handleModalShowClick}  className="card-link">Edit</span>    
                {this.state.showModal ? (
                    <Modal handleModalCloseClick={this.handleModalCloseClick}>
>>>>>>> 33a4d6c88e14d5b2db39c6023eaa96ab270b78a1
                       {this.props.children}
                    </Modal> 
                 
                ) : null}
            </React.Fragment>     
        );
    }

}
export default EditLink