import { Container } from '@mui/material'
import { PropsWithChildren } from 'react'
import { Inside, Outside } from './styles'

type LayoutProps = {}
export const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return (
    <Outside>
      <Inside>
        <Container maxWidth={'lg'}>{children}</Container>
      </Inside>
    </Outside>
  )
}
