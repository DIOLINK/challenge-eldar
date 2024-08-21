import { Layout } from '@/components'
import { Typography } from '@mui/material'
import { PropsWithChildren } from 'react'

interface PageTemplateProps extends PropsWithChildren {
  name?: string
}
export const PageTemplate = ({ children, name }: PageTemplateProps) => {
  return (
    <Layout>
      {name && <Typography variant="body1">{name}</Typography>}
      {children}
    </Layout>
  )
}
