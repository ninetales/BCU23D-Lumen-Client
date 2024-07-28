import React from 'react';
import Auth from '../services/auth';
import validateForm from '../utils/ValidateForm.js';
import formNotice from '../utils/FormNotice.js';

export const RegisterForm = () => {
  const formHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = Object.fromEntries(new FormData(form));

    if (!validateForm(formData)) return;

    const response = await Auth.register({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });

    if (response.success) {
      form.reset();
      formNotice({ form, message: 'Registration successful', type: 'success' });
    }

    console.log('Register form submitted', response);
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
