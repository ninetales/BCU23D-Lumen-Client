import React from 'react';
import Wallet from '../services/wallet.js';

export const Transfer = () => {
  const [response, setResponse] = React.useState({});

  const formHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));

    (async () => {
      setResponse(
        await Wallet.transfer({
          recipient: formData.recipient,
          amount: formData.amount,
        })
      );
    })();
  };

  return (
    <>
      {console.log(response)}
      <form action="" onSubmit={(e) => formHandler(e)}>
        <input type="text" name="recipient" placeholder="Recipient address" />
        <input type="text" name="amount" placeholder="Amount" />
        <button>Transfer</button>
      </form>
    </>
  );
};
