import React, { useState } from 'react';
import { useEffect } from 'react';
import Auth from '../services/auth.js';
import TokenHandler from '../utils/TokenHandler';

export const Wallet = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    if (TokenHandler.getUserToken()) {
      (async () => {
        setUser(await Auth.user());
      })();
    }
  }, []);

  return <>{console.log('userstate', user)}</>;
};
