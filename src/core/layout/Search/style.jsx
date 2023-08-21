import { Stack, styled } from "@mui/material";


export const Container=styled(Stack)(({theme})=>({
    position: 'absolute',
    width: '500px',
    gap:'6px',
    transform: 'translateX(70%)',
    top: '80%',
    right:theme.direction === 'ltr' ?'35%' : '80%',
    [theme.breakpoints.down('lg')]: {
      transform: 'translateX(0)',
      right:theme.direction === 'ltr' ?'10%' : '50%',
    },
    [theme.breakpoints.down('md')]: {
      right:'10%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      transform: 'translateX(8%)',
    }
}))