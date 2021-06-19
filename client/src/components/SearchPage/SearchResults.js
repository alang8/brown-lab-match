import { Box, Link, makeStyles, Typography } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import React from 'react';

const columns = [
  { field: 'department', headerName: 'Department', width: 200, valueGetter: (params) => params.row.department.join(', ') },
  { field: 'name', headerName: 'Name', width: 250, renderCell: params => <Link href={`/labs/${params.row.id}`}>{params.row.name}</Link> },
  {
    field: 'pis', headerName: 'Principle Investigators', width: 300, valueGetter: (params) => params.row.pis.map(v => v.name).join(', '), renderCell: params => <Typography key={params.row.id}>
      {params.row.pis.map((pi, index) =>
        <React.Fragment key={index} >
          <Link href={pi.url} target='_blank' rel='noopener'>{pi.name}</Link>
          {index !== (params.row.pis.length - 1) ? ', ' : ''}
        </React.Fragment>
      )}
    </Typography >
  },
  { field: 'rating', headerName: 'Rating', width: 100, type: 'number' },
  { field: 'size', headerName: 'Size', width: 100, type: 'number' },
  { field: 'totalHours', headerName: 'Workload (hr/week)', width: 200, type: 'number' },
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
    <DataGrid rows={data} columns={columns} pageSize={10} autoHeight disableColumnMenu hideFooterSelectedRowCount />
  </Box>
}

export default SearchResults;