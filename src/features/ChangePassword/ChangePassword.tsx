import React, { ChangeEvent, FC, SyntheticEvent, useState } from 'react';
import Box from '@material-ui/core/Box';
import { Button } from 'components/Button/Button';
import { InputText } from 'components/InputText/InputText';
import { Text } from 'components/Text/Text';
import { changePassword, UserState } from 'features/User/User.slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/store';

import { Navigate } from 'react-router-dom';

export const PAGE_TITLE = 'Alterar senha';
const LABEL_OLD_PASSWORD_FIELD = 'Senha atual';
const LABEL_PASSWORD_FIELD = 'Nova senha';
const LABEL_PASSWORD_CONFIRMATION_FIELD = 'Confirmar nova senha';
const BUTTON_SAVE = 'Salvar';

export const ChangePasswordPage: FC = () => {
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [newPasswordConfirmation, setNewPasswordConfirmation] =
    useState<string>('');
  const dispatch = useDispatch();

  const user: UserState = useSelector((props: RootState) => {
    return props.user;
  });

  const handleChangeOldPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setOldPassword(event.target.value);
  };

  const handleChangeNewPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const handleChangeNewPasswordConfirmation = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setNewPasswordConfirmation(event.target.value);
  };

  const resetFormFields = () => {
    setNewPassword('');
    setNewPasswordConfirmation('');
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (!!newPassword || !!newPasswordConfirmation) {
      dispatch(changePassword({ oldPassword, newPassword }));
      resetFormFields();
    }
  };

  return !user.success ? (
    <Box display="flex" justifyContent="center">
      <Box maxWidth="500px">
        <Text type="H1">{PAGE_TITLE}</Text>
        <form onSubmit={handleSubmit}>
          <Box my={3}>
            <InputText
              label={LABEL_OLD_PASSWORD_FIELD}
              value={oldPassword}
              onChange={handleChangeOldPassword}
              fullWidth
            />
          </Box>
          <Box my={3}>
            <InputText
              label={LABEL_PASSWORD_FIELD}
              value={newPassword}
              onChange={handleChangeNewPassword}
              fullWidth
            />
            <InputText
              label={LABEL_PASSWORD_CONFIRMATION_FIELD}
              value={newPasswordConfirmation}
              onChange={handleChangeNewPasswordConfirmation}
              fullWidth
            />
          </Box>
          <Button
            disabled={!newPassword || !newPasswordConfirmation}
            type="submit"
            fullWidth
          >
            {BUTTON_SAVE}
          </Button>
        </form>
      </Box>
    </Box>
  ) : (
    <Navigate to="/" />
  );
};
