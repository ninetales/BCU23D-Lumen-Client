import React, { useEffect, useState } from 'react';
import Wallet from '../services/wallet.js';

export const MemPoolViewer = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    (async () => {
      setTransactions(await Wallet.transactions());
    })();
  }, []);

  return (
    <>
      <h1>transactions</h1>
      {console.log(transactions)}
    </>
  );
};
