import { useUiContext } from '@/context'
import { COLORS } from '@/styles/Colors'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

export const LoadingBackdrop = () => {
  const { isLoading } = useUiContext()
  return (
    <>
      <Backdrop
        sx={{
          color: COLORS.jet_stream,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  )
}
