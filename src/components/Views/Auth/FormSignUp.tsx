import useTranslation from '@/hooks/useTranslation'
import { Grid, TextField } from '@mui/material'

type FormSignUpProps = {
  isPassword?: boolean
  isAutoFocused?: boolean
}
export const FormSignUp = ({
  isPassword = true,
  isAutoFocused = true,
}: FormSignUpProps) => {
  const { t } = useTranslation()
  return (
    <Grid container spacing={2}>
      {isPassword ? (
        <>
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
              id="email"
              label={t.ui.forms.email}
              name="email"
              type="email"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstname"
              required
              fullWidth
              id="firstname"
              label={t.ui.forms.firstName}
              autoFocus={isAutoFocused}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastname"
              label={t.ui.forms.lastName}
              name="lastname"
              autoComplete="family-name"
            />
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstname"
              required
              fullWidth
              id="firstname"
              label={t.ui.forms.firstName}
              autoFocus={isAutoFocused}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastname"
              label={t.ui.forms.lastName}
              name="lastname"
              autoComplete="family-name"
            />
          </Grid>
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
        </>
      )}
      {isPassword ? (
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="password"
            label={t.ui.forms.password}
            id="password"
          />
        </Grid>
      ) : (
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            multiline
            minRows={4}
            maxRows={4}
            name="message"
            label={t.ui.forms.message}
            id="message"
          />
        </Grid>
      )}
    </Grid>
  )
}
