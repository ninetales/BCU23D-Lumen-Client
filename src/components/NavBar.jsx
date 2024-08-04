import React from 'react';
import TokenHandler from '../utils/TokenHandler';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        {TokenHandler.getUserToken() && (
          <>
            <li>
              <NavLink to="/wallet">Wallet</NavLink>
            </li>
            <li>
              <NavLink to="/transfers">Transfers</NavLink>
            </li>
            <li>
              <NavLink to="/explorer">Explorer</NavLink>
            </li>
            <li>
              <NavLink to="/miner">Miner</NavLink>
            </li>
            <li>
              <NavLink to="/mempool">MemPool</NavLink>
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
              <NavLink to="/login" className="action-btn">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className="action-btn">
                Register
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </>
  );
};
