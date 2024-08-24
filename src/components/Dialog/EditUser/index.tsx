import { CenterBox } from '@/styles/common/index'
import { Box } from '@mui/material'
import { DialogMessage } from '../Message'
import { Userform } from '../UserForm'

type DialogEditProps = {
  open: boolean
}
export const DialogEdit = ({ open }: DialogEditProps) => {
  return (
    <CenterBox>
      <Box margin={2}>
        <DialogMessage open={open}>
          <Userform />
        </DialogMessage>
      </Box>
    </CenterBox>
  )
}
