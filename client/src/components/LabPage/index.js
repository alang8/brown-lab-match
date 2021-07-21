import { Box, Link, makeStyles, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getLab } from '../../utils/API';
import NotFoundPage from '../NotFoundPage';
import Spinner from '../Spinner';
import OpenPosition from './OpenPosition';
import Statistics from './Statistics';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap-reverse',
    },
  },
  body: {
    flexGrow: 1,
  },
  floatRight: {
    [theme.breakpoints.up('md')]: {
      position: 'sticky',
      top: 10,
      minWidth: 250,
      width: 250,
      marginLeft: 10,
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  name: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  header: {
    textDecoration: 'underline',
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 10,
  },
  synopsis: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
  },
  url: {
    marginLeft: 10,
    lineHeight: 2,
  },
  link: {
    fontWeight: 'bold',
  },
  publication: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: 'black',
    borderRadius: '50%',
    display: 'inline-block',
    marginLeft: 2,
    marginRight: 5,
  },
}));

const LabPage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const classes = useStyles();

  useEffect(() => {
    setIsLoading(true);
    getLab(id).then(data => {
      setData(data);
      setError('');
      setIsLoading(false);
    }).catch(e => {
      setIsLoading(false);
      setError(e.toString());
    });
  }, [id]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    <Box className={classes.root}>
      <Alert severity='error'>{error}</Alert>
    </Box>
  }

  if (!data) {
    return <NotFoundPage />;
  }

  return <Box className={classes.root}>
    <Box className={classes.body}>
      <Box className={classes.name}>
        <Typography variant='h3' component='h1'>{data.name}{data.website ? <> <Typography variant='h5' component='span'>[<Link href={data.website}>Website</Link>]</Typography></> : null}</Typography>
      </Box>
      <Box className={classes.synopsis}>
        <Typography variant='body1' component='span'>
          {data.department.join(', ')} |&nbsp;
          {data.pis.map((pi, index) =>
            <React.Fragment key={index}>
              <Link href={pi.url} className={classes.link}>{pi.name}</Link>{index !== (data.pis.length - 1) ? ', ' : null}
            </React.Fragment>
          )}
        </Typography>
        <Typography variant='body1' component='span'>
          Keywords:&nbsp;
          {data.keywords.map((keyword, index) =>
            <React.Fragment key={index}>
              <Link href={`/search/${keyword}`} className={classes.link}>{keyword}</Link>{index !== (data.keywords.length - 1) ? ', ' : null}
            </React.Fragment>
          )}
        </Typography>
      </Box>
      <Box>
        <Typography className={classes.header} variant='h5'>
          Summary
        </Typography>
        <Typography variant='body1'>
          {data.description}
        </Typography>
      </Box>
      <Box>
        <Typography className={classes.header} variant='h5'>
          Select Publications
        </Typography>
        <Box>
          {data.publications.map((publication, index) => <Box className={classes.publication} key={index}>
            <Typography className={classes.dot} as='span' />
            <Typography>
              <Link href={publication.url}>{publication.name}</Link>
            </Typography>
          </Box>)}
        </Box>
      </Box>
      {data.gettingStarted ?
        <Box id='getting-started'>
          <Typography className={classes.header} variant='h5'>
            Getting Involved
          </Typography>
          <Box>
            {data.gettingStarted}
          </Box>
        </Box> : null
      }
    </Box>
    <Box className={classes.floatRight}>
      <Statistics data={data} />
      <OpenPosition isOpen={data.isOpenPosition} />
    </Box>
  </Box>;
}

export default LabPage;