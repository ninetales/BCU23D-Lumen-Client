import React from 'react';

export const Banner = ({ data }) => {
  return (
    <div className="banner">
      <div className="banner__content">
        <h1>{data.title}</h1>
        <span>{data.subtitle}</span>
      </div>
      <img src={data.image} alt="" />
    </div>
  );
};
