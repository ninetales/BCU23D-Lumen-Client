import React from 'react';
import { useEffect, useState } from 'react';
import { WalletViewer } from '../components/WalletViewer.jsx';
import Auth from '../services/auth.js';

import { Transfer } from '../components/Transfer.jsx';
export const Wallet = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    (async () => {
      setUser(await Auth.user());
    })();
  }, []);

  return (
    <>
      <div className="content">
        <h1 className="content__title">{user.credentials?.name}</h1>
        <WalletViewer />
        <Transfer />
      </div>
    </>
  );
};
