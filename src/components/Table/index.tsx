import { Box } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstname', headerName: 'First name', width: 130 },
  { field: 'lastname', headerName: 'Last name', width: 130 },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstname || ''} ${row.lastname || ''}`,
  },
]

const rows = [
  { id: 1, lastname: 'Snow', firstname: 'Jon', age: 35 },
  { id: 2, lastname: 'Lannister', firstname: 'Cersei', age: 42 },
  { id: 3, lastname: 'Lannister', firstname: 'Jaime', age: 45 },
  { id: 4, lastname: 'Stark', firstname: 'Arya', age: 16 },
  { id: 5, lastname: 'Targaryen', firstname: 'Daenerys', age: null },
  { id: 6, lastname: 'Melisandre', firstname: null, age: 150 },
  { id: 7, lastname: 'Clifford', firstname: 'Ferrara', age: 44 },
  { id: 8, lastname: 'Frances', firstname: 'Rossini', age: 36 },
  { id: 9, lastname: 'Roxie', firstname: 'Harvey', age: 65 },
]

export function DataTable() {
  return (
    <Box component={'section'} style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </Box>
  )
}
