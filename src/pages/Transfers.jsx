import React from 'react';
import { TransfersViewer } from '../components/TransfersViewer';

export const Transfers = () => {
  return (
    <>
      <div className="content">
        <h1 className="content__title">Transfers</h1>
        <TransfersViewer />
      </div>
    </>
  );
};
