import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import ContentLoader from 'react-content-loader';

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
              <li className={activeTab === 'received' ? 'exchangeTracking-tab active' : 'exchangeTracking-tab'} onClick={() => getActiveTab('received')}>Mes demandes envoyées </li>
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
                      <div
                        className="exchangeTracking-img"
                        style={{ backgroundImage: `url(${process.env.API_URL}/dishes/${receivedProposition.mealOffer.id}/picture)` }}
                        alt={receivedProposition.mealOffer.name}
                      />

                      <div className="exchangeTracking-textContainer">
                        {receivedProposition.mealOffer.name}
                        <p className="exchangeTracking-textContainer-text"> en échange de </p>
                        {receivedProposition.mealRequest.name}
                      </div>

                      <div
                        className="exchangeTracking-img"
                        style={{ backgroundImage: `url(${process.env.API_URL}/dishes/${receivedProposition.mealRequest.id}/picture)` }}
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
                      <div
                        className="exchangeTracking-img"
                        style={{ backgroundImage: `url(${process.env.API_URL}/dishes/${askedProposition.mealOffer.id}/picture)` }}
                        alt={askedProposition.mealOffer.name}
                      />

                      <div className="exchangeTracking-textContainer">
                        {askedProposition.mealOffer.name}
                        <p className="exchangeTracking-textContainer-text"> en échange de </p>
                        {askedProposition.mealRequest.name}
                      </div>

                      <div
                        className="exchangeTracking-img"
                        style={{ backgroundImage: `url(${process.env.API_URL}/dishes/${askedProposition.mealRequest.id}/picture)` }}
                        alt={askedProposition.mealRequest.name}
                      />
                    </div>

                    <div className="exchangeTracking-informations">
                      {askedProposition.status === 0 && (
                      <p className="exchangeTracking-actions-waiting">En attente</p>
                      )}
                      { askedProposition.status === 1 && (
                      <div>
                        <p className="exchangeTracking-actions-text-accept">{askedProposition.mealRequest.receiver.username} a accepté cet échange
                          <a href={'mailto:"test@mail.fr"'} className="exchangeTracking-actions-buttonContact">Contact</a>
                        </p>
                      </div>
                      )}
                      {askedProposition.status === 2 && (
                      <p>{askedProposition.mealRequest.receiver.username} a refusé cet échange</p>
                      )}
                    </div>

                    <div className="exchangeTracking-dateContainer">
                      <p className="exchangeTracking-dateContainer-text">Demande envoyée le</p>
                      <p className="exchangeTracking-dateContainer-date">{format(new Date(askedProposition.date), 'dd-MM-yyyy')}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        {(!receivedPropositions && !askedPropositions) && (
          <div className="swap-loading-desktop">
            <ContentLoader
              speed={1.5}
              viewBox="0 0 800 200"
              style={{ width: '100%', height: 'auto' }}
              backgroundColor="#454a5f"
              foregroundColor="#9a95ad"
            >
              <rect x="5" y="50" rx="0" ry="0" width="100" height="100" />
              <rect x="230" y="50" rx="0" ry="0" width="100" height="100" />
              <rect x="350" y="50" rx="0" ry="0" width="421" height="100" />
              <rect x="121" y="60" rx="0" ry="0" width="81" height="6" />
              <rect x="121" y="130" rx="0" ry="0" width="81" height="6" />
              <rect x="131" y="96" rx="0" ry="0" width="62" height="5" />
            </ContentLoader>
          </div>
        )}

        {(!receivedPropositions && !askedPropositions) && (
          <div className="swap-loading-mobile">
            <ContentLoader
              speed={1.5}
              viewBox="0 0 800 500"
              style={{ width: '100%', height: 'auto' }}
              backgroundColor="#454a5f"
              foregroundColor="#9a95ad"
            >
              <rect x="10" y="99" rx="0" ry="0" width="180" height="180" />
              <rect x="608" y="98" rx="0" ry="0" width="180" height="180" />
              <rect x="222" y="98" rx="0" ry="0" width="345" height="46" />
              <rect x="268" y="170" rx="0" ry="0" width="250" height="25" />
              <rect x="296" y="213" rx="0" ry="0" width="200" height="20" />
              <rect x="268" y="250" rx="0" ry="0" width="250" height="25" />
              <rect x="235" y="380" rx="0" ry="0" width="300" height="30" />
              <rect x="135" y="300" rx="0" ry="0" width="500" height="70" />
            </ContentLoader>
          </div>
        )}
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
