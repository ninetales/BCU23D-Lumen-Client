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
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button>Register</button>
      </form>
    </div>
  );
};
