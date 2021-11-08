import React, { FC, ReactNode } from 'react';
import Typography from '@material-ui/core/Typography';

interface Props {
  children: ReactNode;
}

const H1: FC<Props> = (props) => {
  const { children } = props;
  return <Typography variant="h1">{children}</Typography>;
};

const H2: FC<Props> = (props) => {
  const { children } = props;
  return <Typography variant="h2">{children}</Typography>;
};

const P1: FC<Props> = (props) => {
  const { children } = props;
  return (
    <Typography component="p" variant="body1">
      {children}
    </Typography>
  );
};

const P2: FC<Props> = (props) => {
  const { children } = props;
  return (
    <Typography component="p" variant="body2">
      {children}
    </Typography>
  );
};

const Span1: FC<Props> = (props) => {
  const { children } = props;
  return (
    <Typography component="span" variant="body1">
      {children}
    </Typography>
  );
};

const Span2: FC<Props> = (props) => {
  const { children } = props;
  return (
    <Typography component="span" variant="body2">
      {children}
    </Typography>
  );
};

export const TextComponents = {
  H1,
  H2,
  P1,
  P2,
  Span1,
  Span2,
};
