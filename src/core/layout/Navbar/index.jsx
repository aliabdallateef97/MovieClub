import React, { useEffect, useState } from 'react'
import LogoIcon from '@/core/assets/logo.png'
import {WbSunnyIcon,SearchIcon} from '@/core/config/import/icons'
import { Logo, Nav } from './style'
import { useNavigate } from 'react-router-dom'
import { IconButton ,Stack,Typography,useTheme } from '@mui/material'
import { useDispatch,useSelector } from 'react-redux'
import * as actions from '@/core/config/import/actions'
import HomeSearch from '../Search'
import * as selectors from '@/core/config/import/selectors'

const Navbar = () => {
    const [scroll ,setScroll]=useState(false)
    const showSearchBar=useSelector(selectors.showSearch)
    // const [show ,setShow]=useState(false)
    const navigate =useNavigate()
    const theme =useTheme()
    const dispatch =useDispatch()


    const showBlackNav=()=>{
      window.scrollY > 300 ? setScroll(true) : setScroll(false) 
    }

    const changeMoodHandler=()=>{
      dispatch(actions.setMode())
    }

      const openSearchBar=()=>{
    dispatch(actions.setShowSearch())
  } 

    // const showSearchHandler=()=>{
    //   setShow(prevState=> !prevState)
    // }

    const changeLangHandler=()=>{
      dispatch(actions.changeLanguage())
    }

    useEffect(()=>{
      window.addEventListener('scroll',showBlackNav)
      return ()=> window.removeEventListener('scroll',showBlackNav)
    },[])
    
    return (
      <Nav className={scroll ? 'black_nav' : ''}>
        <Logo src={LogoIcon} alt="logo" onClick={()=>navigate('/home')}/>
        <Stack gap='6px' direction='row'>
        <IconButton onClick={openSearchBar} style={{position:'relative'}}>
          <SearchIcon sx={{color:theme.palette.main.light}}/>
        </IconButton>
        {showSearchBar && (
          <HomeSearch />
        )}
        <IconButton onClick={changeMoodHandler}>
          <WbSunnyIcon sx={{color:theme.palette.main.light}}/>
        </IconButton>
        <IconButton onClick={changeLangHandler}>
          <Typography color={theme.palette.main.light}>
          {theme.direction === 'ltr' ? 'EN' : 'AR'}
          </Typography>
        </IconButton>
        </Stack>
      </Nav>
  )
}

export default Navbar
