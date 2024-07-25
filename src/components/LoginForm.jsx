import React from 'react';
import Auth from '../services/auth.js';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const navigate = useNavigate();
  const formHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    //todo: add validation
    Auth.login(formData);
    navigate('/wallet');
  };

  return (
    <div className="card card-space">
      <form action="" onSubmit={(e) => formHandler(e)}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
