import React from 'react';
import { Banner } from '../components/Banner';

export const Home = () => {
  return (
    <>
      <Banner
        data={{
          title: 'The future of economy',
          subtitle:
            'The economy is changing, and we are here to help you adapt',
          image: './assets/images/purple.jpg',
        }}
      />
    </>
  );
};
