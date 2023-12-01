import React from 'react';

import FEATURES from '../../consts';

import { Hero, Navbar, Features, Feature } from '../../components';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features>
        {FEATURES.map(({ id, illustration, title, copy }) => {
          return (
            <Feature
              key={id}
              id={id}
              illustration={illustration}
              title={title}
              copy={copy}
            />
          );
        })}
      </Features>
    </>
  );
};

export default Home;
