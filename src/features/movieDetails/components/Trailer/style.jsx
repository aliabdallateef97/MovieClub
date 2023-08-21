import { Stack ,styled } from "@mui/material";

export const TrailerContainer=styled(Stack)(({theme})=>({
    width:'70%',
    margin:'auto',
    height:'500px',
    borderRadius:'20px',
    overflow:'hidden',
    [theme.breakpoints.down('md')]:{
        width:'90%'
    },
    [theme.breakpoints.down('sm')]:{
        width:'100%',
        height:'400px',
    }
}))