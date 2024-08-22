import useTranslation from '@/hooks/useTranslation'
import { Grid, TextField } from '@mui/material'

export const FormSignIn = () => {
  const { t } = useTranslation()
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="username"
          label={t.ui.forms.userName}
          name="username"
          type="text"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          name="password"
          label={t.ui.forms.password}
          type="password"
          id="password"
        />
      </Grid>
    </Grid>
  )
}
