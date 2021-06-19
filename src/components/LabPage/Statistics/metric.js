import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import { pickHex } from '../../../utils';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    marginTop: 5,
  },
  value: {
    fontWeight: 'bold',
    lineHeight: 1,
  },
  name: {
    marginTop: 5,
    lineHeight: 1,
    textAlign: 'center',
  },
  bar: {
    width: '50% !important',
    marginBottom: 5,
  },
  singleBar: {
    marginBottom: 5,
  }
});

const Metric = ({ name, value, showBar, single }) => {
  const classes = useStyles();
  const percent = value / 10;
  return <Box className={classes.root}>
    {showBar ? <Progress className={single ? classes.singleBar : classes.bar} percent={percent * 100} theme={{
      active: {
        symbol: ' ',
        color: 'rgb(' + pickHex([0, 240, 130], [240, 100, 100], percent).join(',') + ')',
      },
    }} status='active' /> : null}
    <Typography variant='h5' className={classes.value}>
      {value}
    </Typography>
    <Typography variant='overline' className={classes.name}>
      {name}
    </Typography>
  </Box>;
}

export default Metric;