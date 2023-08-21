import { Stack ,styled } from "@mui/material";

export const Footer=styled(Stack)(({theme})=>({
    width:'100%',
    padding:'6px',
    alignItems:'center',
    justifyContent:'center',
    gap:'2px',
    backgroundColor:theme.palette.footerHeader.main,
    marginTop:'10px',
}))