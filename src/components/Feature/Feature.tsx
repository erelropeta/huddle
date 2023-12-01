import React from 'react';

import './feature.scss';

interface Feature {
  id: number;
  illustration: string;
  title: string;
  copy: string;
}

const Feature = ({ id, illustration, title, copy }: Feature) => {
  return (
    <article className={id % 2 == 0 ? 'feature feature--even' : 'feature'}>
      <img src={illustration} alt="" className="feature__illustration" />
      <h3 className="feature__title">{title}</h3>
      <p className="feature__copy">{copy}</p>
    </article>
  );
};

export default Feature;
