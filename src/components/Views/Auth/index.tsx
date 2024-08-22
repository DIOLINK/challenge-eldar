import { useUiContext } from '@/context'

import { ISnackbarProps } from '@/context/uiContext'
import { useUserContext } from '@/context/userContext'
import { greet, ROUTES } from '@/helpers'
import useTranslation from '@/hooks/useTranslation'
import { SignIn, SignUp } from '@/services'
import { CenterBox as AuthBox } from '@/styles/common/index'
import {
  ContentFormsTemplate as AuthTemplate,
  ContentFormsTemplateFooter as AuthTemplateFooter,
} from '@/template'
import { Button, Grid, Link, Paper, useTheme } from '@mui/material'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import { FormSignIn } from './FormSignIn'
import { FormSignUp } from './FormSignUp'

export const AuthComponent = () => {
  const { t } = useTranslation()
  const theme = useTheme()
  const router = useRouter()
  const [keyElement, setKeyElement] = useState('login')
  const { setAlerts, setLoading } = useUiContext()
  const { setUserContext } = useUserContext()
  const alertsDefaultOption: ISnackbarProps = {
    open: true,
    severity: 'success',
    isPermanent: false,
    message: '',
  }

  const handleSubmitSingIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    const data = new FormData(event.currentTarget)
    SignIn(data)
      .then(({ user }) => {
        if (user) {
          setAlerts({
            ...alertsDefaultOption,
            message: `${t.greet.welcome} ${greet(user)}`,
          })
          setUserContext(user)
          setLoading(false)
          router.push(ROUTES.home).then(() => setLoading(false))
        }
      })
      .catch((error) => {
        setAlerts({
          ...alertsDefaultOption,
          severity: 'error',
          message: error.message,
          isPermanent: true,
        })
        setLoading(false)
      })
  }
  const handleSubmitSingUp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    const data = new FormData(event.currentTarget)
    SignUp(data)
      .then(({ message, user }) => {
        if (message) {
          setAlerts({
            ...alertsDefaultOption,
            message,
          })
        }
        if (user) {
          setAlerts({
            ...alertsDefaultOption,
            message: `${t.greet.welcome} ${greet(user)}`,
          })
          setUserContext(user)
          router.push(ROUTES.home).then(() => setLoading(false))
        }
      })
      .catch((error) => {
        setAlerts({
          open: true,
          severity: 'error',
          message: error.message,
          isPermanent: true,
        })
        setLoading(false)
      })
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
