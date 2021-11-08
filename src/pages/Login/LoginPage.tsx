import React, { FC } from 'react';
import Box from '@material-ui/core/Box';
import { Button } from '../../components/Button/Button';
import { InputText } from '../../components/InputText/InputText';
import { Text } from '../../components/Text/Text';

const TEXT_PAGE_NAME = 'Fazer login';
const TEXT_USER_FIELD_LABEL = 'Usuário';
const TEXT_PASSWORD_FIELD_LABEL = 'Senha';
const TEXT_BUTTON_LOG_IN = 'Entrar';

export const LoginPage: FC = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Box maxWidth="500px">
        <Text type="H1">{TEXT_PAGE_NAME}</Text>
        <Box mb={3}>
          <InputText label={TEXT_USER_FIELD_LABEL} fullWidth />
          <InputText label={TEXT_PASSWORD_FIELD_LABEL} fullWidth />
        </Box>
        <Button fullWidth>{TEXT_BUTTON_LOG_IN}</Button>
      </Box>
    </Box>
  );
};
