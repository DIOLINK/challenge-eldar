import useTranslation from '@/hooks/useTranslation'
import { TextField } from '@mui/material'

export const FormForgotPassword = () => {
  const { t } = useTranslation()
  return (
    <>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label={t.ui.forms.email}
        name="email"
        autoComplete="email"
        autoFocus
      />
    </>
  )
}
