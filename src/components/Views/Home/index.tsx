import { DataTable as UserTable } from '@/components'
import { useUserContext } from '@/context/userContext'
import useTranslation from '@/hooks/useTranslation'
import { Button } from '@mui/material'

export const HomePage = () => {
  const { t } = useTranslation()
  const { resetUser } = useUserContext()
  return (
    <>
      <Button
        variant={'outlined'}
        sx={{ margin: 3 }}
        onClick={() => resetUser()}
      >
        {t.ui.buttons.logout}
      </Button>
      <UserTable />
    </>
  )
}
