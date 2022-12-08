
import ReactDOM  from 'react-dom';
import { Fragment } from 'react';
import classes from './Modal.module.css'

const BackDrop=props=>{
    return <div className={classes.backdrop} onClick={props.onCartClose}></div>
}

const ModalOverlay=props=>{
    return (
    
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>

    )
    ;
}

const Modal=props=>{
    const portalElement=document.getElementById('overlay');
    return (
      <Fragment>
        {ReactDOM.createPortal(<BackDrop onCartClose={props.onCartClose}/>, portalElement)}
        {ReactDOM.createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>,
          portalElement
        )}
      </Fragment>
    );

}

export default Modal;
