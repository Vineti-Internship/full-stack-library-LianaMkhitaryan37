import React from 'react';
import ReactDOM from 'react-dom'

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.handleCloseClick = this.handleCloseClick.bind(this);
      }
      componentDidMount() {
        const $ = window.$;
        const { handleModalCloseClick } = this.props;
        const element = ReactDOM.findDOMNode(this);
        $(element).modal('show');
        $(element).on('hidden.bs.modal', handleModalCloseClick);
      }
      handleCloseClick() {
        const { handleModalCloseClick } = this.props;
        const $ = window.$;
        $(this.modal).modal('hide');
        handleModalCloseClick();
      }
  render() {
    // The gray background
    return (
        <div  className="modal fade" style={{display : "none"}}>
            <div className="modal-dialog modal-login">
                <div className="modal-content">
                <div className="modal-header">
                        <div className="avatar"> 
                            <img src="https://i.ibb.co/f099PXV/avatar.png" alt="Avatar" />
                        </div>
                        <h4 className="modal-title">Edit</h4>

                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button> 
                    </div>
                    <div className="modal-body">
                        {this.props.children}
                    </div>
                    <div className="modal-footer">

                        <div className="col">
                            <span className="btn" >Check changes careffully </span><br /> 
                
                        </div>
                
                    </div>
                </div> 
            </div>
        </div>

    );
  }
}

export default Modal;