import { BasicButtonGroup, DataTable as UserTable } from '@/components'
import { useApiContext, useUserContext } from '@/context'

import { isEmpty } from '@/helpers'
import useTranslation from '@/hooks/useTranslation'
import { getUsers } from '@/services'
import { ClearUser, User } from '@/types'
import { Button } from '@mui/material'
import { useEffect } from 'react'

export const HomePage = () => {
  const { t } = useTranslation()
  const { resetUser } = useUserContext()
  const { users, setUsersContext } = useApiContext()
  useEffect(() => {
    if (!isEmpty<User | ClearUser>(users)) return
    getUsers().then((data) => {
      setUsersContext(data)
    })
  }, [])
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
      <BasicButtonGroup />
    </>
  )
}
