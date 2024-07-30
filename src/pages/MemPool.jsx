import React from 'react';
import { MemPoolViewer } from '../components/MemPoolViewer';

export const MemPool = () => {
  return (
    <>
      <div className="content">
        <h1 className="content__title">MemPool</h1>
        <MemPoolViewer />
      </div>
    </>
  );
};
