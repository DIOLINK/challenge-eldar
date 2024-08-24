import { Box, IconButton } from '@mui/material'

import { useApiContext, useUiContext, useUserContext } from '@/context'
import useTranslation from '@/hooks/useTranslation'
import { TypeDialog } from '@/types'
import { isAdmin } from '@/utils/isAdmin'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
export function BasicButtonGroup() {
  const { t } = useTranslation()
  const { rowSelectionModel, deleteUsers } = useApiContext()
  const { user } = useUserContext()
  const { setDialog } = useUiContext()

  function onCreateUser(): void {
    setDialog({
      typeDialog: TypeDialog.create,
      title: t.ui.buttons.create,
      open: true,
    })
  }
  function onEditUser(): void {
    setDialog({
      typeDialog: TypeDialog.edit,
      title: t.ui.buttons.edit,
      open: true,
    })
  }
  function onDeleteUser(): void {
    setDialog({
      title: t.ui.buttons.delete,
      typeDialog: TypeDialog.message,
      open: true,
      content: t.ui.delete(rowSelectionModel as number[]),
      onSucces: () => {
        deleteUsers()
      },
    })
  }
  const ICON_SIZE = 32
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
        color="info"
        title={t.ui.buttons.create}
        onClick={onCreateUser}
        disabled={rowSelectionModel.length > 0}
      >
        <AddIcon sx={{ fontSize: ICON_SIZE }} />
      </IconButton>
      <IconButton
        color="warning"
        title={t.ui.buttons.edit}
        onClick={onEditUser}
        disabled={rowSelectionModel.length !== 1}
      >
        <EditIcon sx={{ fontSize: ICON_SIZE }} />
      </IconButton>
      <IconButton
        color="error"
        disabled={rowSelectionModel.length < 1}
        title={t.ui.buttons.delete}
        onClick={onDeleteUser}
      >
        <DeleteIcon sx={{ fontSize: ICON_SIZE }} />
      </IconButton>
    </Box>
  )
}
