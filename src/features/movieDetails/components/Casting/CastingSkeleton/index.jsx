import { Skeleton, Stack } from '@mui/material'
import React from 'react'
import { CastCard } from './style'

const index = () => {
  return (
    <Stack gap='20px' direction='row' >
      <CastCard>
      <Skeleton variant="rectangular" width='100%' height={160} />
        <Stack padding='6px' gap='4px'>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        </Stack>
      </CastCard>
      <CastCard>
      <Skeleton variant="rectangular" width='100%' height={160} />
        <Stack padding='6px' gap='4px'>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        </Stack>
      </CastCard>
      <CastCard>
      <Skeleton variant="rectangular" width='100%' height={160} />
        <Stack padding='6px' gap='4px'>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        </Stack>
      </CastCard>
      <CastCard>
      <Skeleton variant="rectangular" width='100%' height={160} />
        <Stack padding='6px' gap='4px'>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        </Stack>
      </CastCard>
      <CastCard>
      <Skeleton variant="rectangular" width='100%' height={160} />
        <Stack padding='6px' gap='4px'>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        </Stack>
      </CastCard>
      <CastCard>
      <Skeleton variant="rectangular" width='100%' height={160} />
        <Stack padding='6px' gap='4px'>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        </Stack>
      </CastCard>
    </Stack>
  )
}

export default index
