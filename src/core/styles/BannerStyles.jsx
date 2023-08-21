import { Stack, styled } from "@mui/material"

export const HeaderStyled=styled(Stack)(({theme})=>({
    height: '470px',
    objectFit: 'contain',
    position: 'relative',
    '& .txtBox':{
        position: 'absolute',
        top: '50%',
        left:theme.direction === 'ltr'?"20px":0,
        right:theme.direction === 'rtl'?"20px":0,
        transform: 'translateY(-50%)',
        color: theme.palette.primary.light,
    }
}))

export const Fade=styled(Stack)(({theme})=>({
    height:'470px',
    backgroundImage:'linear-gradient(180deg,transparent,rgba(37,37,37,0.61),#111)'
    }))