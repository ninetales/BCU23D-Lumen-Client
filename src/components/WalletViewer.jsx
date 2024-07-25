import React from 'react';
import { useState, useEffect } from 'react';
import Auth from '../services/auth.js';
import TokenHandler from '../utils/TokenHandler';

export const WalletViewer = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    if (TokenHandler.getUserToken()) {
      (async () => {
        setUser(await Auth.user());
      })();
    }
  }, []);

  return (
    <>
      <div className="wallet card">
        <div className="wallet__balance-card">
          <span className="wallet__info-text">Balance</span>
          <span className="wallet__balance">LM {user.wallet?.balance}</span>
        </div>
      </div>
    </>
  );
};
