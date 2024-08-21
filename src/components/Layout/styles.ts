import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Outside = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  textAlign: 'center',
  padding: '0 !important',
  width: '100%',
})

export const Inside = styled(Box)({
  width: '100%',
  flex: 1,
  alignContent: 'center',
})
