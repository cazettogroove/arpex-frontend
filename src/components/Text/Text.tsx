import React, { FC, ReactNode } from 'react';
import { TextComponents } from './TextComponents';

export const TextTypes = Object.keys(TextComponents);

type TextType = keyof typeof TextComponents;

interface Props {
  type?: TextType;
  value?: string;
  children?: ReactNode;
}

export const Text: FC<Props> = (props) => {
  const { type, value, children } = props;
  const Component = TextComponents[type || 'P1'];
  return <Component>{value || children}</Component>;
};
