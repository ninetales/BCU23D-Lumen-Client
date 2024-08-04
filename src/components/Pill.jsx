import React from 'react';

export const Pill = ({ data, children }) => {
  return (
    <>
      <a href={data.link} className="pill card">
        {children}
        <span className="pill__text">{data.text}</span>
      </a>
    </>
  );
};
