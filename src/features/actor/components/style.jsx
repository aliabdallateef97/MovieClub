import { CardMedia, Stack ,styled } from "@mui/material";

export const ActorDetails=styled(Stack)(({theme})=>({
   flexDirection:'row',
   gap:'20px',
   width:'100%',
   marginTop:'20px',
   [theme.breakpoints.down('sm')]:{
    flexDirection:'column'
   } 
}))


export const ActorImg=styled(CardMedia)(({theme})=>({
    width: '350px',
    height: '450px',
    borderRadius: '10px',
    boxShadow: '0 0 10px 4px #524c4c',
    [theme.breakpoints.down('sm')]:{
        width: '250px',
        height: '350px',
    }
}))