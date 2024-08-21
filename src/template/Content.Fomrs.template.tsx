import { COLORS } from '@/styles/Colors'
import { IconContainer } from '@/styles/common'
import { keyframes } from '@emotion/react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Box, Button, Grid, Link, Typography } from '@mui/material'
import { MouseEventHandler } from 'react'
import { RootContentForm } from './styles'

type TemplateProps = {
  title: string
  textBtnSubmite?: string
  iconElement?: JSX.Element
  isIcon?: boolean
  sizeWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  footerElement?: JSX.Element
  isNoValidate?: boolean
  formElement: JSX.Element
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
}
const scaleUpCenter = keyframes`0%{transform:scale(.7)} 100%{transform:scale(1)}`
export const ContentFormsTemplate = ({
  title,
  textBtnSubmite,
  formElement,
  footerElement,
  isIcon = true,
  iconElement = <LockOutlinedIcon sx={{ fill: COLORS.stratos }} />,
  sizeWidth = 'xs',
  isNoValidate = true,
  onSubmit,
}: TemplateProps) => {
  return (
    <RootContentForm
      sx={{
        animation: `${scaleUpCenter} 1s`,
      }}
    >
      {isIcon && <IconContainer>{iconElement}</IconContainer>}

      <Typography variant="h3">{title}</Typography>
      <Box
        component="form"
        onSubmit={onSubmit}
        noValidate={isNoValidate}
        sx={{ mt: 1 }}
        maxWidth={sizeWidth}
      >
        {formElement}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            maxWidth: 'clamp(150px, 70%, 300px)',
            fontWeight: 'bold',
            letterSpacing: '0.03rem',
            borderRadius: 11,
          }}
        >
          {textBtnSubmite ?? title}
        </Button>
        {footerElement && footerElement}
      </Box>
    </RootContentForm>
  )
}
type TemplateFooterProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>
  title: string
}
export const ContentFormsTemplateFooter = ({
  onClick,
  title,
}: TemplateFooterProps) => {
  return (
    <Grid container justifyContent={'center'}>
      <Grid item>
        <Button
          variant="text"
          sx={{ textTransform: 'inherit' }}
          onClick={onClick}
        >
          <Link variant="body2">{title}</Link>
        </Button>
      </Grid>
    </Grid>
  )
}
