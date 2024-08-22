import { Layout } from '@/components'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'

export default function Custom404() {
  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <Box>
          <Box
            component="img"
            alt="Under development"
            src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
            sx={{
              display: 'inline-block',
              height: 'auto',
              maxWidth: '100%',
              borderRadius: 3,
              width: '400px',
            }}
          />
        </Box>
        <Typography variant="h2">404 Not Found</Typography>
        <Typography variant="body1">
          Could not find requested resource
        </Typography>
        <Link href="/">Return</Link>
      </Box>
    </Layout>
  )
}
