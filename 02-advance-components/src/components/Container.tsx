import {
  type ReactNode,
  type ElementType,
  type ComponentPropsWithoutRef,
} from 'react';

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

const Container = <T extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<T>) => {
  const Component = as || 'div';
  return (
    // Recieve the component as a prop
    <Component {...props}>{children}</Component>
  );
};

export default Container;
