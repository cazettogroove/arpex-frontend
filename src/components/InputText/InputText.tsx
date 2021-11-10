import React, { FC } from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

interface Props {
  value?: string;
  label?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
}

export const InputText: FC<Props> = (props) => {
  const { onChange, value, label, fullWidth, name } = props;
  return (
    <FormControl fullWidth={fullWidth}>
      {label && <InputLabel>{label}</InputLabel>}
      <Input onChange={onChange} value={value} name={name} />
    </FormControl>
  );
};
