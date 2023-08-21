import { Stack ,styled } from "@mui/material";

export const LoaderContainer=styled(Stack)(({theme})=>({
    width:'100vw',
    height:'100vh',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#000'
}))