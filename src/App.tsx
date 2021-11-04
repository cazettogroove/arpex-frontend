import React, { FC } from 'react';
import Button from '@material-ui/core/Button';

export const App: FC = () => {
  return (
    <div>
      <a
        href="http://www.arpexcapital.com.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Arpex
      </a>

      <Button variant="contained" color="primary">
        Hello Material
      </Button>
    </div>
  );
};
