import React from 'react';

export const NotFound = () => {
  return (
    <div className="not-found">
      <div className="placeholder">
        <div className="content card">
          <h1>404</h1>
          <p>Oops! Page not found! Please try again...</p>
          <a href="/" className="cta">
            Go Home
          </a>
        </div>
      </div>
      <img src="/assets/images/404.jpg" alt="404" />
    </div>
  );
};
