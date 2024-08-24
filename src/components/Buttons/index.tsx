import { Box, IconButton } from '@mui/material'

import { useApiContext, useUserContext } from '@/context'
import useTranslation from '@/hooks/useTranslation'
import { isAdmin } from '@/utils/isAdmin'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
export function BasicButtonGroup() {
  const { t } = useTranslation()
  const { rowSelectionModel, deleteUsers } = useApiContext()
  const { user } = useUserContext()
  return (
    <Box
      sx={{
        padding: 2,
        justifyContent: 'space-around',
        minWidth: 200,
        minHeight: 72,
        visibility: isAdmin(user) ? 'visible' : 'hidden',
      }}
    >
      <IconButton
        color="primary"
        title={t.ui.buttons.create}
        onClick={() => console.log(t.ui.buttons.create)}
        disabled={rowSelectionModel.length > 0}
      >
        <AddIcon />
      </IconButton>
      <IconButton
        color="warning"
        title={t.ui.buttons.edit}
        onClick={() => console.log(t.ui.buttons.edit)}
        disabled={rowSelectionModel.length > 1}
      >
        <EditIcon />
      </IconButton>
      <IconButton
        color="error"
        title={t.ui.buttons.delete}
        onClick={() => deleteUsers()}
      >
        <DeleteIcon />
      </IconButton>
    </Box>
  )
}
