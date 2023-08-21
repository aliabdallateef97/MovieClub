import React from 'react'
import { Root } from './style'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <Root>
      <Navbar />
      {children}
      <Footer />
    </Root>
  )
}

export default Layout
