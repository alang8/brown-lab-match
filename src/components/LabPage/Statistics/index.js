import { Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Metric from './metric';

const useStyles = makeStyles({
  root: {
    marginBottom: '10px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  metrics: {
    marginTop: 5,
  },

})

const Statistics = ({ data }) => {
  const classes = useStyles();
  return <Card className={classes.root}>
    <CardContent className={classes.content}>
      <Typography variant='h5'>
        Statistics
      </Typography>
      <Grid container spacing={2} className={classes.metrics}>
        <Grid item xs={12}>
          <Metric name='Rating' value={data.rating} showBar single />
        </Grid>
        <Grid item xs={6}>
          <Metric name='Mentor Communication' value={data.communicationMentor} showBar />
        </Grid>
        <Grid item xs={6}>
          <Metric name='PI Communication' value={data.communicationPI} showBar />
        </Grid>
        <Grid item xs={6}>
          {data.autonomy ? <Metric name='Autonomy' value={data.autonomy} showBar /> : null}
        </Grid>
        <Grid item xs={6}>
          <Metric name='Integration' value={data.communication} showBar />
        </Grid>
        <Grid item xs={6}>
          <Metric name='AVG Hours' value={data.communication} />
        </Grid>
        <Grid item xs={6}>
          <Metric name='Total Size' value={data.size} />
        </Grid>
      </Grid>
    </CardContent>
  </Card>
}

export default Statistics;