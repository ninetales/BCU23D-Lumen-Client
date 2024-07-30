import React from 'react';
import { LedgerViewer } from '../components/LedgerViewer';

export const Explorer = () => {
  return (
    <>
      <div className="content">
        <h1 className="content__title">Block explorer</h1>
        <LedgerViewer />
      </div>
    </>
  );
};
