import React from 'react'
import {  DetailsStack } from './style'
import { Skeleton, Stack } from '@mui/material'
import { Container } from '@/core/styles'

const index = () => {
  return (
    <>
      <Skeleton variant="rectangular" width='100%' height='470px' />
      <Container>
      <DetailsStack>
      <Skeleton variant="rounded" width={260} height={300} />
      <Stack gap='10px' width='100%'>
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} width='200px'/>
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} width='100px'/>
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      </Stack>
      </DetailsStack>
      </Container>
    </>
  )
}

export default index
