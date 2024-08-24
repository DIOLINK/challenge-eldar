'use client'
import { LoadingBackdrop, renderSnackbar } from '@/components'
import { RenderDialogProps } from '@/types'
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

export type TSeverity = 'success' | 'info' | 'warning' | 'error'

export const INIT_UI_ALERTS: ISnackbarProps = {
  open: false,
  severity: 'info',
  message: '',
  isPermanent: false,
}
export const INIT_UI_MODALS = {
  open: false,
}
export interface ISnackbarProps {
  open: boolean
  severity: TSeverity
  message: string
  isPermanent?: boolean
}

type UiContextType = {
  isLoading: boolean
  alerts: ISnackbarProps
  dialog: RenderDialogProps
  setLoading: Dispatch<SetStateAction<boolean>>
  setAlerts: Dispatch<SetStateAction<ISnackbarProps>>
  setDialog: Dispatch<SetStateAction<RenderDialogProps>>
}

export const UiContext = createContext<UiContextType>({} as UiContextType)

export const UiContextProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [alerts, setAlerts] = useState<ISnackbarProps>(INIT_UI_ALERTS)
  const [dialog, setDialog] = useState<RenderDialogProps>(
    {} as RenderDialogProps
  )
  const onHideSnackbar = () => {
    setAlerts({ ...alerts, open: false })
  }
  return (
    <UiContext.Provider
      value={{ isLoading, alerts, dialog, setLoading, setAlerts, setDialog }}
    >
      {renderSnackbar({ ...alerts, onHideSnackbar })}
      {isLoading && <LoadingBackdrop />}
      {children}
    </UiContext.Provider>
  )
}

export const useUiContext = () => useContext(UiContext)
