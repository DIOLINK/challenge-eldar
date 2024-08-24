import { useUiContext } from '@/context'
import { RenderDialogProps } from '@/types'
import { Button, Dialog, DialogTitle } from '@mui/material'
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

  function handleSuccess() {
    if (onSucces && onHideDialog) {
      onSucces()
      onHideDialog()
    }
  }

  const handleUser = () => {
    setLoading(true)

    setAlerts({
      open: true,
      severity: 'success',
      isPermanent: false,
      message: 'Success',
    })

    onHideDialog()
    setLoading(false)
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
          <Button onClick={handleUser}>Send</Button>
        </ActiosButons>
      </>
    ),
    create: (
      <>
        <DialogEdit open={open} />
        <ActiosButons onCancel={onHideDialog}>
          <Button onClick={handleUser}>Send</Button>
        </ActiosButons>
      </>
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
