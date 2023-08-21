import { Stack ,styled } from "@mui/material";

export const Nav=styled(Stack)(({theme})=>({
    position: 'fixed',
    backgroundColor: 'rgba(17, 17, 17, 0.26)',
    width: '100%',
    padding: '4px 20px',
    zIndex: '1',
    transition: '0.4s',
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
    "&.black_nav":{
        backgroundColor: theme.palette.footerHeader.main,
    }
}))

export const Logo=styled('img')(({theme})=>({
    width:'55px',
    cursor:'pointer',
    [theme.breakpoints.down('sm')]:{
        width:'40px'
    }
}))