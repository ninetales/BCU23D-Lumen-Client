import React from 'react';
import Auth from '../services/auth.js';
import { useNavigate } from 'react-router-dom';
import TokenHandler from '../utils/TokenHandler.js';
import validateForm from '../utils/ValidateForm.js';

export const LoginForm = () => {
  const navigate = useNavigate();
  const formHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = Object.fromEntries(new FormData(form));

    if (!validateForm(formData)) return;

    const response = await Auth.login(formData);
    if (response.success) {
      form.reset();
    }

    if (TokenHandler.getUserToken()) {
      navigate('/wallet');
    }
  };

  return (
    <>
      <h3>Login</h3>
      <div className="card card-space">
        <form action="" onSubmit={(e) => formHandler(e)}>
          <label>
            <span>Email</span>
            <input type="email" name="email" />
          </label>

          <label htmlFor="password">
            <span>Password</span>
            <input type="password" name="password" />
          </label>

          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};
