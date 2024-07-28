import React from 'react';
import TokenHandler from '../utils/TokenHandler';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>

        {TokenHandler.getUserToken() && (
          <>
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
          </>
        )}
      </ul>
      <ul>
        {TokenHandler.getUserToken() ? (
          <li>
            <button
              onClick={() => {
                TokenHandler.clearUserToken();
                navigate('/');
              }}
              className="action-btn logout"
            >
              Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <a href="/login" className="action-btn">
                Login
              </a>
            </li>
            <li>
              <a href="/register" className="action-btn">
                Register
              </a>
            </li>
          </>
        )}
      </ul>
    </>
  );
};
