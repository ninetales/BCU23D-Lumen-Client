import React from 'react';
import Wallet from '../services/wallet.js';

export const Transfer = () => {
  const formHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));

    Wallet.transfer({
      recipient: formData.recipient,
      amount: formData.amount,
    });
  };

  return (
    <>
      <form action="" onSubmit={(e) => formHandler(e)}>
        <input type="text" name="recipient" placeholder="Recipient address" />
        <input type="text" name="amount" placeholder="Amount" />
        <button>Transfer</button>
      </form>
    </>
  );
};
