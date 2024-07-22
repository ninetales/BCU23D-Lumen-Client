import React from 'react';

export const NavBar = () => {
  return (
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/login">Login</a>
      </li>
      <li>
        <a href="/wallet">Wallet</a>
      </li>
      <li>
        <a href="/explorer">Explorer</a>
      </li>
      <li>
        <a href="/miner">Miner</a>
      </li>
      <li>
        <a href="/mempool">MemPool</a>
      </li>
      <li>
        <a href="/register">Register</a>
      </li>
    </ul>
  );
};
