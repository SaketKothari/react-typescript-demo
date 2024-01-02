import { type ComponentPropsWithoutRef } from 'react';

type FormProps = ComponentPropsWithoutRef<'form'>;

export default function Form(props: FormProps) {
  return <form {...props}>{props.children}</form>;
}
