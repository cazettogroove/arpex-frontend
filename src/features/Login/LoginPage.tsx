import React, { ChangeEvent, FC, SyntheticEvent, useState } from 'react';
import Box from '@material-ui/core/Box';
import { Button } from 'components/Button/Button';
import { InputText } from 'components/InputText/InputText';
import { Text } from 'components/Text/Text';
import { login, UserState } from 'features/User/User.slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/store';

import { Navigate } from 'react-router-dom';

export const TEXT_PAGE_TITLE = 'Fazer login';
const TEXT_USER_FIELD_LABEL = 'Usuário';
const TEXT_PASSWORD_FIELD_LABEL = 'Senha';
const TEXT_BUTTON_LOG_IN = 'Entrar';

export const LoginPage: FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();

  const user: UserState = useSelector((props: RootState) => {
    return props.user;
  });

  const handleChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const resetFormFields = () => {
    setUsername('');
    setPassword('');
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (!!username || !!password) {
      dispatch(login({ username, password }));
      resetFormFields();
    }
  };

  if (user.changePasswordRequired) {
    return <Navigate to="/change-password" />;
  }

  if (user.success) {
    return <Navigate to="/" />;
  }

  return (
    <Box display="flex" justifyContent="center">
      <Box maxWidth="500px">
        <Text type="H1">{TEXT_PAGE_TITLE}</Text>
        <form onSubmit={handleSubmit}>
          <Box my={3}>
            <InputText
              label={TEXT_USER_FIELD_LABEL}
              value={username}
              onChange={handleChangeUsername}
              fullWidth
            />
            <InputText
              label={TEXT_PASSWORD_FIELD_LABEL}
              value={password}
              onChange={handleChangePassword}
              fullWidth
            />
          </Box>
          <Button disabled={!username || !password} type="submit" fullWidth>
            {TEXT_BUTTON_LOG_IN}
          </Button>
        </form>
      </Box>
    </Box>
  );
};
