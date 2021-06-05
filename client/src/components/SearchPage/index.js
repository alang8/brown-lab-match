import { Box, Button, Container, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { DEPARTMENTS, LAB_SIZES, RATINGS, WORDLOADS } from '../../utils';
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

  // this is dummy data
  const [data, setData] = useState([
    { id: 0, department: 'APMA', name: 'Random APMA Lab', pi: [{ name: 'Alex Ding', url: 'https://www.github.com/alexander-ding' }, { name: 'Austin Lang', url: 'https://www.github.com/alexander-ding' }], rating: 5.4, size: 12, workload: 20 },
    { id: 1, department: 'CSCI', name: 'Brown Visual Computing', pi: [{ name: 'Alex Ding', url: 'https://www.github.com/alexander-ding' }, { name: 'Austin Lang', url: 'https://www.github.com/alexander-ding' }], rating: 5.4, size: 12, workload: 20 },
    { id: 2, department: 'CSCI', name: 'Brown Visual Computing', pi: [{ name: 'Daniel Ritchie', url: 'https://www.github.com/alexander-ding' }, { name: 'James Tompkin', url: 'https://www.github.com/alexander-ding' }], rating: 5.4, size: 12, workload: 20 },
    { id: 3, department: 'CSCI', name: 'Brown Visual Computing', pi: [{ name: 'Daniel Ritchie', url: 'https://www.github.com/alexander-ding' }, { name: 'James Tompkin', url: 'https://www.github.com/alexander-ding' }], rating: 5.4, size: 12, workload: 20 },
    { id: 4, department: 'CSCI', name: 'Brown Visual Computing', pi: [{ name: 'Daniel Ritchie', url: 'https://www.github.com/alexander-ding' }, { name: 'James Tompkin', url: 'https://www.github.com/alexander-ding' }], rating: 5.4, size: 12, workload: 20 },
    { id: 5, department: 'CSCI', name: 'Brown Visual Computing', pi: [{ name: 'Daniel Ritchie', url: 'https://www.github.com/alexander-ding' }, { name: 'James Tompkin', url: 'https://www.github.com/alexander-ding' }], rating: 5.4, size: 12, workload: 20 },
    { id: 6, department: 'CSCI', name: 'Brown Visual Computing', pi: [{ name: 'Daniel Ritchie', url: 'https://www.github.com/alexander-ding' }, { name: 'James Tompkin', url: 'https://www.github.com/alexander-ding' }], rating: 5.4, size: 12, workload: 20 },
    { id: 7, department: 'CSCI', name: 'Brown Visual Computing', pi: [{ name: 'Daniel Ritchie', url: 'https://www.github.com/alexander-ding' }, { name: 'James Tompkin', url: 'https://www.github.com/alexander-ding' }], rating: 5.4, size: 12, workload: 20 },
    { id: 8, department: 'CSCI', name: 'Brown Visual Computing', pi: [{ name: 'Daniel Ritchie', url: 'https://www.github.com/alexander-ding' }, { name: 'James Tompkin', url: 'https://www.github.com/alexander-ding' }], rating: 5.4, size: 12, workload: 20 },
    { id: 9, department: 'CSCI', name: 'Brown Visual Computing', pi: [{ name: 'Daniel Ritchie', url: 'https://www.github.com/alexander-ding' }, { name: 'James Tompkin', url: 'https://www.github.com/alexander-ding' }], rating: 5.4, size: 12, workload: 20 },
    { id: 10, department: 'CSCI', name: 'Brown Visual Computing', pi: [{ name: 'Daniel Ritchie', url: 'https://www.github.com/alexander-ding' }, { name: 'James Tompkin', url: 'https://www.github.com/alexander-ding' }], rating: 5.4, size: 12, workload: 20 },
    { id: 11, department: 'CSCI', name: 'Brown Visual Computing', pi: [{ name: 'Daniel Ritchie', url: 'https://www.github.com/alexander-ding' }, { name: 'James Tompkin', url: 'https://www.github.com/alexander-ding' }], rating: 5.4, size: 12, workload: 20 },

  ])

  const clearFilters = () => {
    setDepartment('');
    setRating('');
    setLabSize('');
    setWorkload('');
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
      <Filter name='Workload' data={WORDLOADS} value={workload} setValue={setWorkload} />

      <Button className={classes.clearButton} variant='outlined' onClick={clearFilters}>Clear filters</Button>
    </Box>
    <SearchResults data={data} />
  </Container>;
}

export default SearchPage;