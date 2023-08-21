import { Stack, styled } from "@mui/material";


export const Container=styled(Stack)(({theme})=>({
backgroundColor:theme.palette.primary.light,
padding:'6px 10px',
borderRadius:'10px',
}))


export const TitleStack=styled(Stack)(({theme})=>({
    gap:'20px',
    width:'100%',
    flexDirection:'row',
    alignItems:'center'
}))