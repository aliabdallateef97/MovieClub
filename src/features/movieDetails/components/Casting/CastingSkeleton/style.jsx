import { Stack, styled } from "@mui/material";

export const CastCard=styled(Stack)(({theme})=>({
    borderRadius: '10px',
    boxShadow: '0 0 10px 4px #524c4c',
    // overflow: 'hidden',
    // backgroundColor: theme.palette.primary.dark,
    width:'100%',
    marginTop:'20px'
}))