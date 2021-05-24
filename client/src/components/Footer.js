import { Box, Link, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    paddingTop: 20,
    marginBottom: 12,
  }
})

const Footer = () => {
  const classes = useStyles();
  return <Box className={classes.root}>
    <Typography variant='caption'>
      Run by <Link href='https://www.facebook.com/BrownResearchClub/' target='_blank' rel='noopener'>Brown Research Club</Link>. Developed by <Link href='https://www.fullstackatbrown.com/' target='_blank' rel='noopener'>FullStack@Brown</Link>
    </Typography>
    <Typography variant='caption'>
      Notice an issue on this site? <Link href='https://github.com/FullStackAtBrownTeam/project-lab/issues' target='_blank' rel='noopener'>Help us improve</Link>
    </Typography>
  </Box>
}

export default Footer;