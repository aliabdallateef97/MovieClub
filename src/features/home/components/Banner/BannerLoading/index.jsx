import React from 'react'
import { MainStack } from './style'
import { Skeleton } from '@mui/material'

const BannerLoading = () => {
  return (
    <MainStack>
      <Skeleton variant="text" sx={{ fontSize: '2rem' }} width={'40%'}/>
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'80%'}/>
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'80%'}/>
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'80%'}/>
    </MainStack>
  )
}

export default BannerLoading
