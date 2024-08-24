import { Button, DialogActions } from '@mui/material'
import { PropsWithChildren } from 'react'

type ActiosButonsProps = {
  onCancel: () => void
}

export function ActiosButons({
  onCancel,
  children,
}: PropsWithChildren<ActiosButonsProps>) {
  return (
    <DialogActions>
      <Button onClick={onCancel}>Cancel</Button>
      {children}
    </DialogActions>
  )
}
