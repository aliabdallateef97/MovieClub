import React from 'react'
import { MainCard, MainStack } from './style'
import { Skeleton } from '@mui/material'
import { Container } from '@/core/styles'

const index = () => {
  return (
    <Container>
    <MainStack>
      <MainCard>
      <Skeleton variant="rounded" width={'140px'} height={180} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      </MainCard>
      <MainCard>
      <Skeleton variant="rounded" width={'140px'} height={180} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      </MainCard>
      <MainCard>
      <Skeleton variant="rounded" width={'140px'} height={180} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      </MainCard>
      <MainCard>
      <Skeleton variant="rounded" width={'140px'} height={180} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      </MainCard>
      <MainCard>
      <Skeleton variant="rounded" width={'140px'} height={180} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      </MainCard>
      <MainCard>
      <Skeleton variant="rounded" width={'140px'} height={180} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      </MainCard>
      <MainCard>
      <Skeleton variant="rounded" width={'140px'} height={180} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      </MainCard>
      <MainCard>
      <Skeleton variant="rounded" width={'140px'} height={180} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      </MainCard>
    </MainStack>
    </Container>
  )
}

export default index
