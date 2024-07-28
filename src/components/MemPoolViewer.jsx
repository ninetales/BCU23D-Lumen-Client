import React, { useEffect, useState } from 'react';
import Wallet from '../services/wallet.js';
import transactionHandler from '../utils/transactionHandler.js';

export const MemPoolViewer = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = Object.entries(await Wallet.transactions()).map(
        ([, data]) => data
      );

      setList(transactionHandler({ transactions: response }));
    })();
  }, []);

  return (
    <>
      <div className="mempool">
        {list.length > 0 ? (
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
        ) : (
          <div class="page-message">
            <span>There are no transactions to show.</span>
          </div>
        )}
      </div>
    </>
  );
};
