import React, { FC, ReactNode } from 'react';
import MuiButton from '@material-ui/core/Button/Button';

interface Props {
  children?: ReactNode;
  component?: 'button' | 'a' | 'div';
  disabled?: boolean;
  fullWidth?: boolean;
  color?: 'primary' | 'secondary';
}

export const Button: FC<Props> = (props) => {
  const {
    children,
    component = 'button',
    disabled = false,
    fullWidth = false,
    color = 'primary',
  } = props;
  return (
    <MuiButton
      component={component}
      disabled={disabled}
      fullWidth={fullWidth}
      size="medium"
      variant="contained"
      color={color}
    >
      {children}
    </MuiButton>
  );
};
