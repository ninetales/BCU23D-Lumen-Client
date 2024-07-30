import React from 'react';
import { BlockMiner } from '../components/BlockMiner';

export const Miner = () => {
  return (
    <>
      <div className="content">
        <h1 className="content__title">Miner</h1>
        <BlockMiner />
      </div>
    </>
  );
};
