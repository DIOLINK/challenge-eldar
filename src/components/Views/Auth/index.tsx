import { useUiContext } from '@/context'

import { CenterBox as AuthBox } from '@/styles/common/index'
import {
  ContentFormsTemplate as AuthTemplate,
  ContentFormsTemplateFooter as AuthTemplateFooter,
} from '@/template'
// import { SignInType } from '@/types'
import useTranslation from '@/hooks/useTranslation'
import { Button, Grid, Link, Paper, useTheme } from '@mui/material'
import { FormEvent, useState } from 'react'
import { FormSignIn } from './FormSignIn'
import { FormSignUp } from './FormSignUp'

export const AuthComponent = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const [keyElement, setKeyElement] = useState('login')
  const { setLoading } = useUiContext()
  // function auth(user: SignInType) {
  //   const alertsDefaultOption: ISnackbarProps = {
  //     open: true,
  //     severity: 'success',
  //     isPermanent: false,
  //   }
  //   if (user.message || user.error) {
  //     setAlerts({
  //       ...alertsDefaultOption,
  //       severity: 'error',
  //       message: user.message,
  //     })
  //     console.error(user.message)
  //   }
  //   if (user.id) {
  //     setAlerts({
  //       ...alertsDefaultOption,
  //       message: `Welcome`,
  //     })
  //   }
  // }

  const handleSubmitSingIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    const data = new FormData(event.currentTarget)
    console.log('🚀 ~ handleSubmitSingIn ~ data:', data)

    // SignIn(data)
    //   .then((user) => auth(user))
    //   .finally(() => setLoading(false))
  }
  const handleSubmitSingUp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    const data = new FormData(event.currentTarget)
    console.log('🚀 ~ handleSubmitSingUp ~ data:', data)
    // SignUp(data)
    //   .then((user) => {
    //     auth(user)
    //   })
    //   .finally(() => setLoading(false))
  }

  const ELEMENT_OBJECT: { [key: string]: JSX.Element } = {
    login: (
      <AuthTemplate
        title={t.pages.auth.signin.title}
        onSubmit={handleSubmitSingIn}
        formElement={<FormSignIn />}
        footerElement={
          <Grid container justifyContent={'center'}>
            <Button
              variant="text"
              sx={{ textTransform: 'inherit' }}
              onClick={() => setKeyElement('signUp')}
            >
              <Link variant="body2">{t.pages.auth.signin.footer.title}</Link>
            </Button>
          </Grid>
        }
      />
    ),
    signUp: (
      <AuthTemplate
        title={t.pages.auth.signup.title}
        formElement={<FormSignUp />}
        onSubmit={handleSubmitSingUp}
        footerElement={
          <AuthTemplateFooter
            title={t.pages.auth.signup.footer.title}
            onClick={() => setKeyElement('login')}
          />
        }
      />
    ),
  }
  return (
    <>
      <AuthBox>
        <Paper
          variant="elevation"
          elevation={6}
          sx={{
            padding: 3,
            maxWidth: theme.breakpoints.values.sm,
          }}
        >
          {ELEMENT_OBJECT[keyElement]}
        </Paper>
      </AuthBox>
    </>
  )
}
