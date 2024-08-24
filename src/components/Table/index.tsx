import { useApiContext, useUserContext } from '@/context'
import { User } from '@/types'
import { flattenObject } from '@/utils/flattenObject'
import { isAdmin } from '@/utils/isAdmin'
import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

export function DataTable() {
  const { users, setRowSelectionModel, rowSelectionModel } = useApiContext()
  const { user } = useUserContext()
  return (
    <Box component={'section'} style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={users?.map((user) => flattenObject(user))}
        columns={Object.keys({
          ...flattenObject((users as User[])[0] ?? {}),
        }).map((key) => ({
          field: key,
          headerName: key.charAt(0).toUpperCase() + key.slice(1),
          width: 130,
        }))}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        checkboxSelection={isAdmin(user)}
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setRowSelectionModel(newRowSelectionModel)
        }}
        rowSelectionModel={rowSelectionModel}
        pageSizeOptions={[5, 10]}
      />
    </Box>
  )
}
