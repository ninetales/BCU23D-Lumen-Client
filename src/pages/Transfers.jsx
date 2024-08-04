import React from 'react';
import { TransfersViewer } from '../components/TransfersViewer';
import { Pill } from '../components/Pill';
import { DataTransferBoth, Cube } from 'iconoir-react';

export const Transfers = () => {
  return (
    <>
      <div className="content">
        <h1 className="content__title">Transfers</h1>
        <div className="pills">
          <Pill data={{ link: '/wallet', text: 'Transfer funds' }}>
            <DataTransferBoth />
          </Pill>
          <Pill data={{ link: '/explorer', text: 'Explore Blocks' }}>
            <Cube />
          </Pill>
        </div>
        <TransfersViewer />
      </div>
    </>
  );
};
