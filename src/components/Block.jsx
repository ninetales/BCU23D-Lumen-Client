import React from 'react';
import { useEffect, useState } from 'react';
import transactionHandler from '../utils/transactionHandler.js';

export const Block = ({ block }) => {
  const timestamp = new Date(block.timestamp);
  const [transactions, setTransactions] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setTransactions(transactionHandler({ transactions: block.transactions }));
  }, []);

  return (
    <li className="block">
      <div className="block__header" onClick={() => setToggle(!toggle)}>
        <div className="block__header-info">
          <span>
            {block.blockIndex === 1
              ? `Genesis Block`
              : `Block: ${block.blockIndex}`}
          </span>
        </div>
        <span>Mined: {timestamp.toUTCString()}</span>
      </div>
      <div className={`block__body ${toggle ? 'toggled' : ''}`}>
        <div className="block__details block__section">
          <h3>Block Details:</h3>
          <ul className="block__list">
            <li>
              <span>Last hash:</span>
              <span>{block.lastHash}</span>
            </li>
            <li>
              <span>Hash:</span>
              <span>{block.hash}</span>
            </li>
            <li>
              <span>Nonce:</span>
              <span>{block.nonce}</span>
            </li>
            <li>
              <span>Difficulty:</span>
              <span>{block.difficulty}</span>
            </li>
            <li>
              <span>Transactions:</span>
              <span>{transactions.length}</span>
            </li>
          </ul>
        </div>

        {transactions.length > 0 && (
          <div className="block__transactions block__section">
            <h3>Transactions:</h3>
            <ul className="block__list">
              {transactions.map((transaction, index) => {
                const timestamp = new Date(transaction.timestamp);
                return (
                  <li
                    key={index}
                    className={`block__transaction ${
                      transaction.sender === 'reward-address'
                        ? 'block__transaction-reward'
                        : 'block__transaction-regular'
                    }`}
                  >
                    <ul className="block__transaction-data">
                      <li>
                        <span>Sender:</span>
                        <span>
                          {transaction.sender !== 'reward-address'
                            ? transaction.sender
                            : 'Lumen Miner Reward'}
                        </span>
                      </li>
                      <li>
                        <span>Recipient:</span>
                        <span>{transaction.recipient}</span>
                      </li>
                      <li>
                        <span>Amount:</span>
                        <span>LM {transaction.amount}</span>
                      </li>
                      <li>
                        <span>Timestamp:</span>
                        <span>{timestamp.toUTCString()}</span>
                      </li>
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </li>
  );
};
