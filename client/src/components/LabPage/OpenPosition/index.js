import { Alert } from '@material-ui/lab';
import React from 'react';
import { HashLink } from 'react-router-hash-link';

const OpenPosition = ({ isOpen }) => {
  return (isOpen ?
    <Alert severity='success'>There are <HashLink smooth to='#getting-started'>open positions</HashLink>!</Alert> :
    <Alert severity='error'>No open position now</Alert>
  );
}

export default OpenPosition;