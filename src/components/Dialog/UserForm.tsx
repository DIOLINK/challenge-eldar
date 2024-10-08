import { useApiContext } from '@/context'
import { User } from '@/types'
import {
  ATTRIBUTES_TO_REMOVE,
  flattenObject,
  removeAttributes,
} from '@/utils/flattenObject'
import { Grid, TextField } from '@mui/material'

export const Userform = () => {
  const { users, values, handleInputChange } = useApiContext()
  const DISABLED_KEY = ['login.uuid']
  const REQUIRED_KEY = ['firstname', 'lastname', 'email', 'login.username']
  return (
    <Grid container spacing={2} maxWidth={'md'}>
      {Object.keys(
        removeAttributes(
          flattenObject((users as User[])[0] ?? {}),
          ATTRIBUTES_TO_REMOVE
        )
      ).map((key) => (
        <Grid item xs={12} key={key}>
          <TextField
            fullWidth
            id={key}
            label={key.charAt(0).toUpperCase() + key.slice(1)}
            name={key}
            onChange={handleInputChange}
            value={values[key]}
            disabled={DISABLED_KEY.includes(key)}
            required={REQUIRED_KEY.includes(key)}
          />
        </Grid>
      ))}
    </Grid>
  )
}
