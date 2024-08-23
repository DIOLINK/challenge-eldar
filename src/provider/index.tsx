import {
  UiContextProvider,
  UserContextProvider,
  UsersContextProvider,
} from '@/context'
import Theme from '@/styles/Theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { PropsWithChildren } from 'react'

export const AllProviders = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <UiContextProvider>
        <UsersContextProvider>
          <UserContextProvider>{children}</UserContextProvider>
        </UsersContextProvider>
      </UiContextProvider>
    </ThemeProvider>
  )
}
