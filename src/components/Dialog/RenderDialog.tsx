import { RenderDialogProps } from '@/types'
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material'
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
  function handleSuccess() {
    if (onSucces && onHideDialog) {
      onSucces()
      onHideDialog()
    }
  }
  const ELEMENTS_DIALOG: { [key: string]: JSX.Element } = {
    message: <DialogMessage open={open} content={content} />,
    edit: <DialogEdit />,
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
      <DialogActions>
        <Button onClick={onHideDialog}>Cancel</Button>
        <Button onClick={handleSuccess}>Send</Button>
      </DialogActions>
    </Dialog>
  )
}
