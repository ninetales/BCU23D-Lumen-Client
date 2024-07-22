import React, { useEffect } from 'react';
import Ledger from '../services/ledger';

export const LedgerViewer = () => {
  useEffect(() => {
    (async () => {
      const { data } = await Ledger.get();
      console.log('recieved ledger data', data);
    })();
  });

  return <div>LedgerViewer</div>;
};
