import { type ComponentPropsWithoutRef } from 'react';

type ButtonProps = {
  element: 'button';
} & ComponentPropsWithoutRef<'button'>;

type AnchorProps = {
  element: 'anchor';
} & ComponentPropsWithoutRef<'a'>;

const Button = (props: ButtonProps | AnchorProps) => {
  if (props.element === 'anchor') {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
};

export default Button;
