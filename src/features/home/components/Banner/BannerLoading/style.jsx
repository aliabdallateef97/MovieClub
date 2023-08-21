import { Stack,styled } from "@mui/material";


export const MainStack=styled(Stack)(({theme})=>({
    height: '470px',
    width:'100%',
    background:theme.palette.secondary.main,
    justifyContent:'center',
    padding:'20px',
    gap:'10px'
}))