import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import SwapContentContainer from '../../containers/SwapContent-container';
import './style.scss';

const SwapModal = ({ isShowing, hide }) => (isShowing ? ReactDOM.createPortal(
  <>
    <div className="modal-overlay" />
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal-modal">
        <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
          <span aria-hidden="true">&times;</span>
        </button>
        <SwapContentContainer />
      </div>
    </div>

  </>, document.body,
) : null);

export default SwapModal;
