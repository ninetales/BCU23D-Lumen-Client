import React from 'react';
import Block from '../services/block';
import Wallet from '../services/wallet';
import { useEffect, useState } from 'react';

export const BlockMiner = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    (async () => {
      const response = Object.entries(await Wallet.transactions()).map(
        ([, data]) => data
      );

      setTransactions(response);
    })();
  }, []);

  const mineBlock = async (e) => {
    e.preventDefault();
    Block.mine();
  };

  return (
    <>
      {transactions.length > 0 ? (
        <button onClick={(e) => mineBlock(e)}>Mine Block</button>
      ) : (
        <div class="mine-message">
          <span>There are no transactions to mine.</span>
        </div>
      )}
    </>
  );
};
