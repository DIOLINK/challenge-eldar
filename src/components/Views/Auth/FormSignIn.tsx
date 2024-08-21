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
          id="email"
          label={t.ui.forms.email}
          name="email"
          type="email"
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
