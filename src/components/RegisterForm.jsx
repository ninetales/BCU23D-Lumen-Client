import React from 'react';
import Auth from '../services/auth';

export const RegisterForm = () => {
  const formHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    Auth.register({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });
    console.log('Register form submitted');
  };

  return (
    <div className="card card-space">
      <form onSubmit={(e) => formHandler(e)}>
        <label>
          <span>Name</span>
          <input type="text" name="name" />
        </label>
        <label>
          <span>Email</span>
          <input type="text" name="email" />
        </label>
        <label>
          <span>Password</span>
          <input type="password" name="password" />
        </label>
        <button>Register</button>
      </form>
    </div>
  );
};
