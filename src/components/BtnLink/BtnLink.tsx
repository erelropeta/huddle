import './btnlink.scss';

interface BtnLink {
  title: string;
  link: string;
  classNames: string;
}

const BtnLink = ({ title, link, classNames }: BtnLink) => {
  return (
    <a className={classNames} href={link}>
      {title}
    </a>
  );
};

export default BtnLink;
