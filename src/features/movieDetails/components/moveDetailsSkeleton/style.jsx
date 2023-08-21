import { Stack ,styled } from "@mui/material";


export const DetailsStack=styled(Stack)(({theme})=>({
    flexDirection:'row',
    gap:'30px',
    marginTop:'30px',
    [theme.breakpoints.down('sm')]:{
        flexDirection:'column',
    }
}))