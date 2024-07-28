import React, { useEffect, useState } from 'react';
import Wallet from '../services/wallet.js';

export const MemPoolViewer = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = Object.entries(await Wallet.transactions());
      const memPool = response.map(([, data]) => data);

      const transfers = memPool.flatMap((transactionData) => {
        delete transactionData.outputMap[transactionData.inputMap.address];
        const sender = transactionData.inputMap.address;
        const timestamp = transactionData.inputMap.timestamp;

        return Object.entries(transactionData.outputMap).map(
          ([recipient, amount]) => ({ sender, recipient, amount, timestamp })
        );
      });

      setList([...list, ...transfers]);
    })();
  }, []);

  return (
    <>
      <div className="mempool">
        <ul>
          {list &&
            list.map((transfer, index) => {
              const timestamp = new Date(transfer.timestamp);
              return (
                <li key={index} className="card">
                  <div>
                    <span>Sender:</span>
                    <span>{transfer.sender}</span>
                  </div>
                  <div>
                    <span>Recipient:</span>
                    <span>{transfer.recipient}</span>
                  </div>
                  <div>
                    <span>Amount:</span>
                    <span>{transfer.amount}</span>
                  </div>
                  <div>
                    <span>Timestamp:</span>
                    <span>{timestamp.toUTCString()}</span>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};
