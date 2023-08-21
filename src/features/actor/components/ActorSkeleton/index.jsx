import { Skeleton, Stack } from '@mui/material'
import { DetailsStack } from './style'

const index = () => {
  return (
      <DetailsStack>
      <Skeleton variant="rounded" width={260} height={300} />
      <Stack gap='10px' width='100%'>
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} width='200px'/>
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      </Stack>
      </DetailsStack>
  )
}

export default index
