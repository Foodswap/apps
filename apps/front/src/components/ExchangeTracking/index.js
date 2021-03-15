import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import './style.scss';

const ExchangeTracking = ({
  askedPropositions,
  receivedPropositions,
  getExchangeList,
  getActiveTab,
  activeTab,
  userId,
  getClickAccept,
  getClickRefuse,
}) => {
  useEffect(() => getExchangeList(userId), []);

  return (
    <div className="exchangeTracking">
      <p>Suivi d'échange</p>

      <div className="exchangeTracking-menuContainer">
        <ul className="exchangeTracking-menuContent">
          <li className="exchangeTracking-tab" onClick={() => getActiveTab('received')}>Mes demandes envoyés </li>
          <li className="exchangeTracking-tab" onClick={() => getActiveTab('asked')}>Mes propositions reçues</li>
        </ul>
      </div>

      <div className="exchangeTracking-body">
        <div className={activeTab === 'asked' ? 'exchangeTracking-panel active' : 'exchangeTracking-panel'}>
          {receivedPropositions && (
            receivedPropositions.map((receivedProposition) => (
              <div className="exchangeTracking-line" key={receivedProposition.id}>
             { console.log("received swaps :" + receivedProposition)}
                <div className="exchangeTracking-description">
                  <img
                    className="exchangeTracking-img"
                    src={`http://ec2-54-145-80-6.compute-1.amazonaws.com/v1/meals/${receivedProposition.mealOffer.id}/picture`}
                    alt={receivedProposition.mealOffer.name}
                  />

                  <p className="exchangeTracking-textContainer">
                    {receivedProposition.mealOffer.name}
                    <span className="exchangeTracking-textContainer-text"> en échange de </span>
                    {receivedProposition.mealRequest.name}
                  </p>

                  <img
                    className="exchangeTracking-img"
                    src={`http://ec2-54-145-80-6.compute-1.amazonaws.com/v1/meals/${receivedProposition.mealRequest.id}/picture`}
                    alt={receivedProposition.mealRequest.name}
                  />
                </div>

                <div className="exchangeTracking-actions">
                  {receivedProposition.status === 0 && (
                    <div className="exchangeTracking-actions-container">
                      <button type="button" className="exchangeTracking-actions-buttonAccept" onClick={() => getClickAccept(receivedProposition.id, userId)}>Accepter</button>
                      <button type="button" className="exchangeTracking-actions-buttonRefuse" onClick={() => getClickRefuse(receivedProposition.id, userId)}>Refuser</button>
                    </div>
                  )}
                  {receivedProposition.status === 1 && (
                    <div className="exchangeTracking-actions-container">
                      <p className="exchangeTracking-actions-textAccept">Vous avez accepté cet échange</p>
                      <a href={`mailto:${receivedProposition.asker.user_email}`} className="exchangeTracking-actions-buttonContact">Contact</a>
                    </div>
                  )}
                  {receivedProposition.status === 2 && (
                    <div className="exchangeTracking-actions-container">
                      <p className="exchangeTracking-actions-textRefuse">Vous avez refusé cet échange</p>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        <div className={activeTab === 'received' ? 'exchangeTracking-panel active' : 'exchangeTracking-panel'}>
        
          {askedPropositions && (
            askedPropositions.map((askedProposition) => (
              
              <div className="exchangeTracking-line" key={askedProposition.id}>
              { console.log("asked swaps: " + askedProposition.mealOffer.name)}

                <div className="exchangeTracking-description">
                  <img
                    className="exchangeTracking-img"
                    src={`http://ec2-54-145-80-6.compute-1.amazonaws.com/v1/meals/${askedProposition.mealOffer.id}/picture`}
                    alt={askedProposition.mealOffer.name}
                  />

                  <p className="exchangeTracking-textContainer">
                    {askedProposition.mealOffer.name}
                    <span className="exchangeTracking-textContainer-text"> en échange de </span>
                    {askedProposition.mealRequest.name}
                  </p>

                  <img
                    className="exchangeTracking-img"
                    src={`http://ec2-54-145-80-6.compute-1.amazonaws.com/v1/meals/${askedProposition.mealRequest.id}/picture`}
                    alt={askedProposition.mealRequest.name}
                  />
                </div>

                <div className="exchangeTracking-actions">
                  <div className="exchangeTracking-actions-container">
                    {askedProposition.status === 0 && (
                      <p>En attente</p>
                    )}
                    { askedProposition.status === 1 && (
                      <p>{askedProposition.receiver.user_username} à accepté cet échange</p>
                    )}
                    {askedProposition.status === 2 && (
                      <p>{askedProposition.receiver.user_username} à refusé cet échange</p>
                    )}
                  </div>

                  {/* <p>{format(new Date(askedProposition.createdAt), 'dd-MM-yyyy')}</p> */}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

ExchangeTracking.propTypes = {
  askedPropositions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      status: PropTypes.number,
      createdAt: PropTypes.string,
      asker: PropTypes.shape({
        users_username: PropTypes.string,
        users_id: PropTypes.number,
        dish_id: PropTypes.number,
        dish_name: PropTypes.string,
        dish_picture: PropTypes.string,
      }),
      receiver: PropTypes.shape({
        users_username: PropTypes.string,
        users_id: PropTypes.number,
        dish_id: PropTypes.number,
        dish_name: PropTypes.string,
        dish_picture: PropTypes.string,
      }),
    }),
  ),
  receivedPropositions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      status: PropTypes.number,
      createdAt: PropTypes.string,
      asker: PropTypes.shape({
        users_username: PropTypes.string,
        users_id: PropTypes.number,
        dish_id: PropTypes.number,
        dish_name: PropTypes.string,
        dish_picture: PropTypes.string,
      }),
      receiver: PropTypes.shape({
        users_username: PropTypes.string,
        users_id: PropTypes.number,
        dish_id: PropTypes.number,
        dish_name: PropTypes.string,
        dish_picture: PropTypes.string,
      }),
    }),
  ),
  getExchangeList: PropTypes.func.isRequired,
  getActiveTab: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  getClickAccept: PropTypes.func.isRequired,
  getClickRefuse: PropTypes.func.isRequired,
};

ExchangeTracking.defaultProps = {
  askedPropositions: null,
  receivedPropositions: null,
};

export default ExchangeTracking;
