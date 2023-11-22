import './hero.scss';
import heroIllustration from '../../assets/images/illustration-mockups.svg';

import BtnLink from '../BtnLink/BtnLink';

const Hero = () => {
  return (
    <div className="c-hero">
      <section className="hero container">
        <div className="hero__info">
          <h1 className="hero__title">
            Build the community your fans will love
          </h1>
          <p className="hero__copy">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <BtnLink
            title="Get started for free"
            link="/signup"
            classNames="btn-link btn-link--primary"
          />
        </div>
        <img className="hero__illustration" src={heroIllustration} alt="" />
      </section>
    </div>
  );
};

export default Hero;
