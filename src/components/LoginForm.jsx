import React from 'react';
import Auth from '../services/auth';

export const LoginForm = () => {
  const formHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    //todo: add validation
    Auth.login(formData);
  };

  return (
    <form action="" onSubmit={(e) => formHandler(e)}>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />
      <button type="submit">Login</button>
    </form>
  );
};
