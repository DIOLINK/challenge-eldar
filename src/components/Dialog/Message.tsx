import { DialogContent, DialogContentText } from '@mui/material'
import { PropsWithChildren, useEffect, useRef } from 'react'
type DialogMessageProps = {
  content?: string
  open: boolean
}
export const DialogMessage = ({
  content,
  open,
  children,
}: PropsWithChildren<DialogMessageProps>) => {
  const descriptionElementRef = useRef<HTMLElement>(null)
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [open])
  return (
    <DialogContent dividers={true}>
      <DialogContentText
        id="scroll-dialog-description"
        ref={descriptionElementRef}
        tabIndex={-1}
      >
        {content}
        {children}
      </DialogContentText>
    </DialogContent>
  )
}
