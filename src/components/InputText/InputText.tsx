import React, { FC } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

interface Props {
  value?: string;
  label?: string;
  fullWidth?: boolean;
}

export const InputText: FC<Props> = (props) => {
  const { value, label, fullWidth } = props;
  return (
    <FormControl fullWidth={fullWidth}>
      {label && <InputLabel>{label}</InputLabel>}
      <Input value={value} />
    </FormControl>
  );
};
