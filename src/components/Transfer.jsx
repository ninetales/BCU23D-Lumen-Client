import React from 'react';
import Wallet from '../services/wallet.js';

export const Transfer = () => {
  const [response, setResponse] = React.useState({});

  const formHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));

    if (!formData.recipient || !formData.amount) {
      return;
    }

    (async () => {
      const response = await Wallet.transfer({
        recipient: formData.recipient,
        amount: formData.amount,
      });
    })();
  };

  return (
    <>
      <div className="transfer card card-space">
        <span>Transfer funds</span>
        <form action="" onSubmit={(e) => formHandler(e)}>
          <input
            type="text"
            name="recipient"
            placeholder="Recipient address"
            required
          />
          <input type="text" name="amount" placeholder="Amount" required />
          <button>Transfer money</button>
        </form>
      </div>
    </>
  );
};
