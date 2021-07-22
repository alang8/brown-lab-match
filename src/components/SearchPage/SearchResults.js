import { Box, Link, makeStyles } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import React from 'react';
import { departmentCodeToName, extractLowerFromRange } from '../../utils';

const columns = [
  { field: 'department', headerName: 'Department', width: 300, valueGetter: (params) => params.row.department.map(departmentCodeToName).join(', ') },
  { field: 'name', headerName: 'Name', width: 250, renderCell: params => <Link href={`/labs/${params.row.id}`}>{params.row.name}</Link> },
  {
    field: 'pis', headerName: 'Principle Investigators', width: 250, valueGetter: (params) => params.row.pis.map(v => v.name).join(', '), renderCell: params => <React.Fragment key={params.row.id}>
      {params.row.pis.map((pi, index) =>
        <React.Fragment key={index} >
          <Link href={pi.url} rel='noopener noreferrer' target='_blank'>{pi.name}</Link>
          {index !== (params.row.pis.length - 1) ? ', ' : ''}
        </React.Fragment>
      )}
    </React.Fragment >
  },
  { field: 'rating', headerName: 'Rating', width: 100, type: 'number' },
  { field: 'size', headerName: 'Size', width: 100, sortComparator: (v1, v2) => extractLowerFromRange(v1) - extractLowerFromRange(v2), type: 'number' },
  { field: 'totalHours', headerName: 'Workload (hr/week)', width: 200, sortComparator: (v1, v2) => extractLowerFromRange(v1) - extractLowerFromRange(v2), type: 'number' },
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
    <DataGrid rows={data} columns={columns} pageSize={15} autoHeight disableColumnMenu hideFooterSelectedRowCount disableSelectionOnClick disableColumnResize disableDensitySelector disableColumnSelector disableColumnReorder disableMultipleSelection disableColumnFilter />
  </Box>
}

export default SearchResults;