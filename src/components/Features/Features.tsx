import React from 'react';

import './features.scss';

const Features = ({ children }: string) => {
  return (
    <section className="features container">
      <h2 className="features__title">Features</h2>
      {children}
    </section>
  );
};

export default Features;
