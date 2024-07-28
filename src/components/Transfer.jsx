import React from 'react';
import Wallet from '../services/wallet.js';
import validateForm from '../utils/ValidateForm.js';
import formNotice from '../utils/FormNotice.js';

export const Transfer = () => {
  // const [response, setResponse] = React.useState({});

  const formHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = Object.fromEntries(new FormData(form));

    if (!validateForm(formData)) return;

    (async () => {
      const response = await Wallet.transfer({
        recipient: formData.recipient,
        amount: formData.amount,
      });

      if (response.success) {
        form.reset();
        formNotice({
          form,
          message: 'Transfer successful',
          type: 'success',
        });
      }
    })();
  };

  return (
    <>
      <div className="transfer card card-space">
        <span>Transfer funds</span>
        <form action="" onSubmit={(e) => formHandler(e)}>
          <label>
            <span>Recipient address</span>
            <input type="text" name="recipient" />
          </label>
          <label>
            <span>Amount</span>
            <input type="text" name="amount" />
          </label>
          <button>Transfer money</button>
        </form>
      </div>
    </>
  );
};
