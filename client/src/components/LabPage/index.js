import { Box } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';

const LabPage = () => {
  const { id } = useParams();
  return <Box>
    Lab page {id}
  </Box>;
}

export default LabPage;