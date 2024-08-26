import { useApiContext, useUiContext } from '@/context'
import { postUser, putUser } from '@/services'
import { RenderDialogProps } from '@/types'
import { Box, Button, Dialog, DialogTitle } from '@mui/material'
import { ActiosButons } from './ActionButon'
import { DialogEdit } from './EditUser'
import { DialogMessage } from './Message'

export const RenderDialog = ({
  open,
  title,
  typeDialog,
  content,
  onHideDialog,
  onSucces,
}: RenderDialogProps) => {
  const { setAlerts, setLoading } = useUiContext()
  const { createUser, editUsers } = useApiContext()
  function handleSuccess() {
    if (onSucces && onHideDialog) {
      onSucces()
      onHideDialog()
    }
  }

  const handleCreateUser = () => {
    setLoading(true)

    postUser().then(() => {
      setAlerts({
        open: true,
        severity: 'success',
        isPermanent: false,
        message: 'Success',
      })
      onHideDialog()
      createUser()
      setLoading(false)
    })
  }
  const handleEditUser = () => {
    setLoading(true)
    putUser().then(() => {
      setAlerts({
        open: true,
        severity: 'success',
        isPermanent: false,
        message: 'Success',
      })
      onHideDialog()
      editUsers()
      setLoading(false)
    })
  }

  const ELEMENTS_DIALOG: { [key: string]: JSX.Element } = {
    message: (
      <>
        <DialogMessage open={open} content={content} />
        <ActiosButons onCancel={onHideDialog}>
          <Button onClick={handleSuccess}>Send</Button>
        </ActiosButons>
      </>
    ),
    edit: (
      <>
        <DialogEdit open={open} />
        <ActiosButons onCancel={onHideDialog}>
          <Button onClick={handleEditUser}>Send</Button>
        </ActiosButons>
      </>
    ),
    create: (
      <Box component="form" noValidate={false} onSubmit={handleCreateUser}>
        <DialogEdit open={open} />
        <ActiosButons onCancel={onHideDialog}>
          <Button type="submit">Send</Button>
        </ActiosButons>
      </Box>
    ),
  }

  return (
    <Dialog
      open={open}
      onClose={onHideDialog}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
      {ELEMENTS_DIALOG[typeDialog]}
    </Dialog>
  )
}
