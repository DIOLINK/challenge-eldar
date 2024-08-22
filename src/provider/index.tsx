import { UiContextProvider } from '@/context'
import { UserContextProvider } from '@/context/userContext'
import Theme from '@/styles/Theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { PropsWithChildren } from 'react'

export const AllProviders = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <UiContextProvider>
        <UserContextProvider>{children}</UserContextProvider>
      </UiContextProvider>
    </ThemeProvider>
  )
}
