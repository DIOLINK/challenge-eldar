// import { useUiContext } from '@/context'
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
  // const { setAlerts, setLoading } = useUiContext()

  function handleSuccess() {
    if (onSucces && onHideDialog) {
      onSucces()
      onHideDialog()
    }
  }

  // const handleSubmitEditUser = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()
  //   setLoading(true)
  //   const alertsDefaultOption: ISnackbarProps = {
  //     open: true,
  //     severity: 'success',
  //     isPermanent: false,
  //     message: '',
  //   }

  //   putUser({} as User)
  //     .then(() => {
  //       setAlerts({
  //         ...alertsDefaultOption,
  //         message: 'Success',
  //       })
  //     })
  //     .catch(() => {
  //       setAlerts({
  //         open: true,
  //         severity: 'error',
  //         message: 'error',
  //         isPermanent: true,
  //       })
  //       setLoading(false)
  //     })
  // }

  function ActiosButons() {
    return (
      <DialogActions>
        <Button onClick={onHideDialog}>Cancel</Button>
        <Button onClick={handleSuccess}>Send</Button>
      </DialogActions>
    )
  }

  const ELEMENTS_DIALOG: { [key: string]: JSX.Element } = {
    message: (
      <>
        <DialogMessage open={open} content={content} />
        {ActiosButons()}
      </>
    ),
    edit: (
      <>
        <DialogEdit />
        {ActiosButons()}
      </>
    ),
    create: (
      <>
        <DialogEdit />
        {ActiosButons()}
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
