'use client'
import { renderSnackbar } from '@/components'
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
export interface ISnackbarProps {
  open: boolean
  severity: TSeverity
  message: string
  isPermanent?: boolean
}

type UiContextType = {
  isLoading: boolean
  alerts: ISnackbarProps
  setLoading: Dispatch<SetStateAction<boolean>>
  setAlerts: Dispatch<SetStateAction<ISnackbarProps>>
}

export const UiContext = createContext<UiContextType>({} as UiContextType)

export const UiContextProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [alerts, setAlerts] = useState<ISnackbarProps>(INIT_UI_ALERTS)
  const onHideSnackbar = () => {
    setAlerts({ ...alerts, open: false })
  }
  return (
    <UiContext.Provider value={{ isLoading, alerts, setLoading, setAlerts }}>
      {renderSnackbar({ ...alerts, onHideSnackbar })}
      {children}
    </UiContext.Provider>
  )
}

export const useUiContext = () => useContext(UiContext)
