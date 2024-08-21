import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import DangerousOutlinedIcon from '@mui/icons-material/DangerousOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined'
import { Alert, Snackbar } from '@mui/material'
import { ISnackbarProps } from 'context/uiContext'

interface RenderSnackbarProps extends ISnackbarProps {
  onHideSnackbar: () => void
}
export const renderSnackbar = ({
  open,
  severity = 'info',
  message,
  isPermanent,
  onHideSnackbar,
}: RenderSnackbarProps) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      autoHideDuration={isPermanent ? null : 3000}
      onClose={onHideSnackbar}
    >
      <Alert
        sx={{ width: '100%' }}
        severity={severity}
        onClose={onHideSnackbar}
        iconMapping={{
          success: <CheckCircleOutlineIcon fontSize="inherit" />,
          warning: <ReportProblemOutlinedIcon fontSize="inherit" />,
          info: <InfoOutlinedIcon fontSize="inherit" />,
          error: <DangerousOutlinedIcon fontSize="inherit" />,
        }}
      >
        <span dangerouslySetInnerHTML={{ __html: message }} />
      </Alert>
    </Snackbar>
  )
}
