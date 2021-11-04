import React, { FC } from 'react';
import { Button } from '../../components/Button/Button';
import { InputText } from '../../components/InputText/InputText';

export const LoginPage: FC = () => {
  return (
    <>
      <InputText fullWidth />
      <InputText fullWidth />
      <Button fullWidth>Log In</Button>
    </>
  );
};
