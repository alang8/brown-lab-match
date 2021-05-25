import { Box, Link, makeStyles, Typography } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import React from 'react';
import { departmentValueToName } from '../../utils';

const columns = [
  { field: 'different', headerName: 'Department', width: 200, valueGetter: (params) => departmentValueToName(params.row.department) },
  { field: 'name', headerName: 'Name', width: 250, renderCell: params => <Link href={`/labs/${params.row.id}`}>{params.row.name}</Link> },
  {
    field: 'pi', headerName: 'Principle Investigators', width: 300, valueGetter: (params) => params.row.pi.map(v => v.name).join(', '), renderCell: params => <Typography>
      {params.row.pi.map((pi, index) =>
        <>
          <Link key={index} href={pi.url} target='_blank' rel='noopener'>{pi.name}</Link>
          {index !== (params.row.pi.length - 1) ? ', ' : ''}
        </>
      )}
    </Typography>
  },
  { field: 'rating', headerName: 'Rating', width: 100, type: 'number' },
  { field: 'size', headerName: 'Size', width: 100, type: 'number' },
  { field: 'workload', headerName: 'Workload (hr/week)', width: 200, type: 'number' },
];

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: 20,
  }
})

const SearchResults = (props) => {
  const { data } = props;
  const classes = useStyles();
  return <Box className={classes.root}>
    <DataGrid rows={data} columns={columns} pageSize={10} autoHeight disableColumnMenu />
  </Box>
}

export default SearchResults;