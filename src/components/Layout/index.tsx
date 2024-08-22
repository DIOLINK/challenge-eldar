import { Container } from '@mui/material'
import { PropsWithChildren } from 'react'
import { Inside, Outside } from './styles'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Outside>
      <Inside>
        <Container maxWidth={'lg'}>{children}</Container>
      </Inside>
    </Outside>
  )
}
