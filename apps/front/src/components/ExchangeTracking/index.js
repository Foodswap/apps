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
}) => {
  useEffect(() => getExchangeList(), []);

  return (
    <div>
      <p>Suivi d'échange</p>

      <div>
        <ul>
          <li onClick={() => getActiveTab('received')}>Mes Propositions</li>
          <li onClick={() => getActiveTab('asked')}>Mes Demandes</li>
        </ul>
      </div>

      <div className={activeTab === 'received' ? 'panel active' : 'panel'}>
        {receivedPropositions && (
          receivedPropositions.map((receivedProposition) => (
            <div className="line">
              <div className="description">
                <img
                  src={receivedProposition.receiver.dish_picture}
                  alt={receivedProposition.receiver.dish_name}
                />

                <p>
                  {receivedProposition.receiver.dish_name}
                  <span> en échange de </span>
                  {receivedProposition.asker.dish_name}
                </p>

                <img
                  src={receivedProposition.asker.dish_picture}
                  alt={receivedProposition.asker.dish_name}
                />
              </div>

              <div className="actions">
                {receivedProposition.status === 0 && (
                  <div>
                    <button type="button">Accepter</button>
                    <button type="button">Refuser</button>
                  </div>
                )}
                {receivedProposition.status === 1 && (
                  <div>
                    <p>Vous avez accepté cet échange</p>
                    <button type="button">Contact</button>
                  </div>
                )}
                {receivedProposition.status === 2 && (
                  <div>
                    <p>Vous avez refusé cet échange</p>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      <div className={activeTab === 'asked' ? 'panel active' : 'panel'}>
        {askedPropositions && (
          askedPropositions.map((askedProposition) => (
            <div className="line">
              <div className="description">
                <img
                  src={askedProposition.asker.dish_picture}
                  alt={askedProposition.asker.dish_name}
                />

                <p>
                  {askedProposition.asker.dish_name}
                  <span> en échange de </span>
                  {askedProposition.receiver.dish_name}
                </p>

                <img
                  src={askedProposition.receiver.dish_picture}
                  alt={askedProposition.receiver.dish_name}
                />
              </div>

              <div className="actions">
                <div>
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

                <p>{format(new Date(askedProposition.createdAt), 'dd-MM-yyyy')}</p>
              </div>
            </div>
          ))
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
};

ExchangeTracking.defaultProps = {
  askedPropositions: null,
  receivedPropositions: null,
};

export default ExchangeTracking;
