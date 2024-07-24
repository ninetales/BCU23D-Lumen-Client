import React from 'react';

export const Block = ({ block }) => {
  const timestamp = new Date(block.timestamp);

  return (
    <li className="block">
      <div className="block__header">
        <div className="block__header-info">
          <span>
            {block.blockIndex === 1
              ? `Genesis Block`
              : `Block: ${block.blockIndex}`}
          </span>
        </div>
        <span>Mined: {timestamp.toUTCString()}</span>
      </div>
      <div className="block__body">
        <div className="block__details">
          <span>Block Details:</span>
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
          </ul>
        </div>

        <span>Transactions:</span>
        <ul className="block__transactions">
          {block.transactions.map((transaction, index) => {
            const obj = Object.entries(transaction.outputMap);
            console.log(obj, index);
          })}
        </ul>
      </div>
    </li>
  );
};
