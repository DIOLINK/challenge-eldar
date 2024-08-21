import useTranslation from '@/hooks/useTranslation'
import { Checkbox, FormControlLabel, Grid, TextField } from '@mui/material'

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
        </>
      ) : (
        <>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label={t.ui.forms.firstName}
              autoFocus={isAutoFocused}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              label={t.ui.forms.lastName}
              name="lastName"
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
      <Grid item xs={12}>
        {isPassword ? (
          <TextField
            required
            fullWidth
            name="password"
            label={t.ui.forms.password}
            type="password"
            id="password"
          />
        ) : (
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
        )}
      </Grid>
      {!isPassword && (
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox name="newsletter" color="primary" />}
            label={t.ui.forms.newsletter}
          />
        </Grid>
      )}
    </Grid>
  )
}
