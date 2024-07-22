import React from 'react';
import Block from '../services/block';

export const BlockMiner = () => {
  const mineBlock = async (e) => {
    e.preventDefault();
    Block.mine();
  };

  return (
    <>
      <button
        onClick={(e) => {
          mineBlock(e);
        }}
      >
        Mine Block
      </button>
    </>
  );
};
