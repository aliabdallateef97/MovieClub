import { Stack ,styled } from "@mui/material";

export const MainStack =styled(Stack)(({theme})=>({
    flexDirection:'row',
    justifyContent:'space-between',
    gap:'10px',
    width:'100%',
}))

export const MainCard =styled(Stack)(({theme})=>({
    gap:'2px',
    width:'140px',
}))