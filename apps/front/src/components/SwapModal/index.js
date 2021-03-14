import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import SwapContent from '../../containers/SwapContent';
import './style.scss';



const SwapModal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal( 
  
 
  <React.Fragment>
 
 
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal-modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        

     <SwapContent />

        {/* <div className="modal-button-container">
        <button
        type="button"
        className="modal-send-swap-button">
          Envoyer l'échange
        </button>
        </div> */}
      </div>
    </div>

  </React.Fragment>, document.body
) : null;

export default SwapModal;
