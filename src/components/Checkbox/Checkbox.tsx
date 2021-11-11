import React, { ChangeEvent, FC } from 'react';
import MuiCheckbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

interface Props {
  label?: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: FC<Props> = (props) => {
  const { label, checked, onChange } = props;
  return (
    <FormGroup>
      <FormControlLabel
        control={<MuiCheckbox checked={checked} onChange={onChange} />}
        label={label}
      />
    </FormGroup>
  );
};
