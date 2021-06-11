import { Box, Button, Container, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { applyFilters, DEPARTMENTS, LAB_SIZES, RATINGS, WORKLOADS } from '../../utils';
import { getAllLabs, getQueryLabs } from '../../utils/API';
import Spinner from '../Spinner';
import Filter from './Filter';
import SearchResults from './SearchResults';

const useStyles = makeStyles({
  root: {

  },
  filters: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  filtersText: {
    marginRight: 10,
  },
  clearButton: {
    marginLeft: 'auto',
  },

})

const SearchPage = (props) => {
  const classes = useStyles();
  const { showAll } = props;
  const { query } = useParams();
  const [department, setDepartment] = useState('');
  const [rating, setRating] = useState('');
  const [labSize, setLabSize] = useState('');
  const [workload, setWorkload] = useState('');

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const clearFilters = () => {
    setDepartment('');
    setRating('');
    setLabSize('');
    setWorkload('');
  }

  useEffect(() => {
    if (showAll) {
      setIsLoading(true);
      getAllLabs().then(data => {
        setIsLoading(false);
        setData(data)
      });
    } else {
      setIsLoading(true);
      getQueryLabs(query).then(data => {
        setIsLoading(false);
        setData(data);
      })
    }
  }, [query, showAll]);

  const dataToRender = applyFilters(data, {
    department,
    rating,
    labSize,
    workload
  })

  if (isLoading) {
    return <Spinner />
  }

  return <Container className={classes.root}>
    <Typography variant='h4' component='h1'>
      {showAll ? 'All labs' : `Results for "${query}"`}
    </Typography>
    <Box className={classes.filters}>
      <Typography className={classes.filtersText} variant='h6' component='span'>Filter by:</Typography>
      <Filter name='Department' data={DEPARTMENTS} value={department} setValue={setDepartment} />
      <Filter name='Rating' data={RATINGS} value={rating} setValue={setRating} />
      <Filter name='Lab size' data={LAB_SIZES} value={labSize} setValue={setLabSize} />
      <Filter name='Workload' data={WORKLOADS} value={workload} setValue={setWorkload} />
      <Button className={classes.clearButton} variant='outlined' onClick={clearFilters}>Clear filters</Button>
    </Box>
    <SearchResults data={dataToRender} />
  </Container>;
}

export default SearchPage;