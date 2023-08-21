import React from 'react'
import { Footer } from './style'
import { DarkTypography } from '@/core/styles'

const index = () => {
  return (
    <Footer>
      <DarkTypography variant='h5' responsive="12px">Copyright &copy; 2023 All Right Reserved</DarkTypography>
      <DarkTypography variant='h5' responsive="12px">This Website made by Ali Abd Allateef</DarkTypography>
    </Footer>
  )
}

export default index
