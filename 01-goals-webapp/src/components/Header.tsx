import { type ReactNode } from 'react';

type HeaderProps = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};

const Header = ({ children, image }: HeaderProps) => {
  return (
    <header>
      {/* <img src={image.src} alt={image.alt} /> */}
      <img {...image} />
      {children}
    </header>
  );
};

export default Header;
