import React, { useEffect, useState } from 'react';
import Ledger from '../services/ledger';
import { Block } from './Block';

export const LedgerViewer = () => {
  const [ledger, setLedger] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await Ledger.get();
      setLedger(data);
    })();
  }, []);

  return (
    <>
      <ul className="ledgerViewer">
        {ledger.map((block, index) => {
          return <Block key={index} block={block} />;
        })}
      </ul>
    </>
  );
};
