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
    <div className="exchangeTracking-page">

      <div className="exchangeTracking">
        <h2 className="exchangeTracking-title">Suivi de vos demandes d'échange</h2>
        <div className="exchangeTracking-container">

          <div className="exchangeTracking-menuContainer">
            <ul className="exchangeTracking-menuContent">
              <li className={activeTab === 'received' ? 'exchangeTracking-tab active' : 'exchangeTracking-tab'} onClick={() => getActiveTab('received')}>Mes demandes envoyés </li>
              <li className={activeTab === 'asked' ? 'exchangeTracking-tab active' : 'exchangeTracking-tab'} onClick={() => getActiveTab('asked')}>Mes propositions reçues</li>
            </ul>
          </div>

          <div className="exchangeTracking-body">
            <div className={activeTab === 'asked' ? 'exchangeTracking-panel active' : 'exchangeTracking-panel'}>

              {receivedPropositions && (
                receivedPropositions.map((receivedProposition) => (
                  <div className="exchangeTracking-line" key={receivedProposition.id}>
                    { console.log(`received swaps :${receivedProposition}`)}

                    { receivedPropositions.length === 0 && (
                    <p> Vous n'avez pas encore reçu de proposition </p>
                    )}
                    <div className="exchangeTracking-description">
                      <img
                        className="exchangeTracking-img"
                        src={`http://ec2-54-145-80-6.compute-1.amazonaws.com/v1/meals/${receivedProposition.mealOffer.id}/picture`}
                        alt={receivedProposition.mealOffer.name}
                      />

                      <div className="exchangeTracking-textContainer">
                        {receivedProposition.mealOffer.name}
                        <p className="exchangeTracking-textContainer-text"> en échange de </p>
                        {receivedProposition.mealRequest.name}
                      </div>

                      <img
                        className="exchangeTracking-img"
                        src={`http://ec2-54-145-80-6.compute-1.amazonaws.com/v1/meals/${receivedProposition.mealRequest.id}/picture`}
                        alt={receivedProposition.mealRequest.name}
                      />
                    </div>
                    {receivedProposition.status === 0 && (
                    <div className="exchangeTracking-actions-container">
                      <button type="button" className="exchangeTracking-actions-buttonAccept" onClick={() => getClickAccept(receivedProposition.id, userId)}>Accepter</button>
                      <button type="button" className="exchangeTracking-actions-buttonRefuse" onClick={() => getClickRefuse(receivedProposition.id, userId)}>Refuser</button>
                    </div>
                    )}
                    {receivedProposition.status === 1 && (
                    <div className="exchangeTracking-actions-container">
                      <p className="exchangeTracking-actions-text-accept-reciver">Vous avez accepté cet échange
                        <a href={'mailto:"test@mail.fr"'} className="exchangeTracking-actions-buttonContact">Contact</a>
                      </p>
                    </div>
                    )}
                    {receivedProposition.status === 2 && (
                    <div className="exchangeTracking-actions-container">
                      <p className="exchangeTracking-actions-textRefuse">Vous avez refusé cet échange</p>
                    </div>
                    )}

                    <div className="exchangeTracking-dateContainer">
                      <p className="exchangeTracking-dateContainer-text">Demande reçue le</p>
                      <p className="exchangeTracking-dateContainer-date">{format(new Date(receivedProposition.date), 'dd-MM-yyyy')}</p>
                    </div>
                  </div>
                ))
              )}

            </div>

            <div className={activeTab === 'received' ? 'exchangeTracking-panel active' : 'exchangeTracking-panel'}>

              {askedPropositions && (

                askedPropositions.map((askedProposition) => (

                  <div className="exchangeTracking-line" key={askedProposition.id}>
                    { console.log(`asked swaps: ${askedProposition.mealOffer.name}`)}

                    {askedProposition.length === 0 && (
                    <p> Vous n'avez pas encore fait de proposition </p>
                    )}

                    <div className="exchangeTracking-description">
                      <img
                        className="exchangeTracking-img"
                        src={`http://ec2-54-145-80-6.compute-1.amazonaws.com/v1/meals/${askedProposition.mealOffer.id}/picture`}
                        alt={askedProposition.mealOffer.name}
                      />

                      <div className="exchangeTracking-textContainer">
                        {askedProposition.mealOffer.name}
                        <p className="exchangeTracking-textContainer-text"> en échange de </p>
                        {askedProposition.mealRequest.name}
                      </div>

                      <img
                        className="exchangeTracking-img"
                        src={`http://ec2-54-145-80-6.compute-1.amazonaws.com/v1/meals/${askedProposition.mealRequest.id}/picture`}
                        alt={askedProposition.mealRequest.name}
                      />
                    </div>

                    <div className="exchangeTracking-informations">
                      {askedProposition.status === 0 && (
                      <p className="exchangeTracking-actions-waiting">En attente</p>
                      )}
                      { askedProposition.status === 1 && (
                      <div>
                        <p className="exchangeTracking-actions-text-accept">{askedProposition.mealRequest.receiver.username} à accepté cet échange
                          <a href={'mailto:"test@mail.fr"'} className="exchangeTracking-actions-buttonContact">Contact</a>
                        </p>
                      </div>
                      )}
                      {askedProposition.status === 2 && (
                      <p>{askedProposition.mealRequest.receiver.username} à refusé cet échange</p>
                      )}
                    </div>

                    <div className="exchangeTracking-dateContainer">
                      <p className="exchangeTracking-dateContainer-text">Demande envoyé le</p>
                      <p className="exchangeTracking-dateContainer-date">{format(new Date(askedProposition.date), 'dd-MM-yyyy')}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
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
