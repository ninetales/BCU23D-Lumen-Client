import React from 'react';
import { useEffect, useState } from 'react';
import Ledger from '../services/ledger';
import HistoryHandler from '../utils/TransferHistoryHandler';
import { Cube, Coins, MoneySquare, HandCard } from 'iconoir-react';

export const TransfersViewer = () => {
  const [blocks, setBlocks] = useState([]);

  const getIconComponent = (transactionType) => {
    switch (transactionType) {
      case 'debit':
        return <HandCard />;
        break;
      case 'credit':
        return <MoneySquare />;
        break;
      case 'reward':
        return <Coins />;
        break;
      default:
        return <MoneySquare />;
    }
  };

  useEffect(() => {
    (async () => {
      const { data } = await Ledger.get();
      const blockTransfers = await HistoryHandler({ data });
      setBlocks(blockTransfers.reverse());
    })();
  }, []);

  return (
    <>
      {console.log('blocks', blocks)}
      <ul className="timeline">
        {blocks.map((block, index) => {
          return (
            <>
              <li key={index} className="timeline__section">
                <i className="timeline__section__icon">
                  <Cube />
                </i>
                <div className="timeline__block-info">
                  <h4>
                    {' '}
                    {block.blockIndex === 1
                      ? 'Genesis Block'
                      : 'Block: ' + block.blockIndex}
                  </h4>
                </div>
                <div className="timeline__block-content">
                  <ul className="block-transfers" key={`${index}-transfers`}>
                    {block.transfers.map((transfer, index) => {
                      return (
                        <>
                          <li key={index} className="block__transfer card">
                            <i
                              className={`block__transfer__icon block__transfer__${transfer.transactionType}`}
                            >
                              {getIconComponent(transfer.transactionType)}
                            </i>
                            <ul className="block__transfer__data">
                              <li>
                                <span>
                                  {(() => {
                                    switch (transfer.transactionType) {
                                      case 'debit':
                                        return 'Transfered:';
                                        break;
                                      case 'credit':
                                        return 'Recieved:';
                                        break;
                                      case 'reward':
                                        return 'Rewarded for mining:';
                                        break;
                                      default:
                                        return 'Transfer';
                                    }
                                  })()}
                                </span>
                                <span>
                                  {`${
                                    transfer.transactionType === 'debit'
                                      ? '-'
                                      : ''
                                  }` + transfer.amount}
                                </span>
                              </li>
                              <li>
                                <span>Timestamp:</span>
                                <span>
                                  {new Date(transfer.timestamp).toUTCString()}
                                </span>
                              </li>
                              <li>
                                <span>Sender:</span>
                                <span>
                                  {transfer.sender !== 'reward-address'
                                    ? transfer.sender
                                    : 'Lumen Miner Reward'}
                                </span>
                              </li>
                              <li>
                                <span>Recipient:</span>
                                <span>{transfer.recipient}</span>
                              </li>
                            </ul>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};
