import { type ElementType } from 'react';

type ContainerProps = {
  as: ElementType;
};

const Container = ({ as }: ContainerProps) => {
  const Component = as;
  return (
    // Recieve the component as a prop
    <Component />
  );
};

export default Container;
