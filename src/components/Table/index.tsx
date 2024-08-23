import { useUserContext } from '@/context/userContext'
import { ClearUser, User } from '@/types'
import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

export function DataTable() {
  const { users } = useUserContext()

  return (
    <Box component={'section'} style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={users}
        columns={Object.keys({ ...(users as User[] | ClearUser[])[0] }).map(
          (key) => ({
            field: key,
            headerName: key.charAt(0).toUpperCase() + key.slice(1),
            width: 130,
          })
        )}
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
