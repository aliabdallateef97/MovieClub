import { Box,styled } from "@mui/material";

export const Container=styled(Box)(({theme})=>({
padding:'0px 30px',
[theme.breakpoints.down("md")]:{
    padding:'0px 20px',
},
[theme.breakpoints.down("sm")]:{
    padding:'0px 10px',
},
}))