import { COLORS } from '@/styles/Colors'
import {
  BORDERS,
  boxShadows,
  bright_linear_gradient3,
  SHADOWS,
} from '@/styles/Theme'
import { Avatar, Box, Link, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Title = styled(Typography)({
  fontWeight: 600,
  textAlign: 'left',
  textShadow: SHADOWS.textShadow2,
  color: COLORS.silver,
})

export const PaperCustom = styled(Paper)({
  boxShadow:
    '0px 3px 5px -1px rgba(249, 242, 242, 0.2),0px 5px 8px 0px rgba(255, 255, 255, 0.14),0px 1px 14px 0px rgba(255, 252, 252, 0.12)',
})

export const IconContainer = styled(Avatar)({
  margin: 8,
  padding: 24,
  backgroundColor: COLORS.stratos,
  background: `linear-gradient(${bright_linear_gradient3})`,
  border: BORDERS.boderdIcon,
  boxShadow: boxShadows,
})

export const CenterBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
})

export const LinkHiddem = styled(Link)({
  textTransform: 'none',
  textDecoration: 'none',
  color: 'inherit',
})
