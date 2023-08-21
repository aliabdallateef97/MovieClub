import { Stack ,styled } from "@mui/material";

export const DetailsStack=styled(Stack)(({theme})=>({
    flexDirection:'row',
    gap:'30px',
    margin:'20px',
    [theme.breakpoints.down('sm')]:{
        gap:'10px',
        flexDirection:'column',
    }
}))

export const CustomedPoster=styled('img')(({theme})=>({
    width: '260px',
    height: '350px',
  borderRadius: '10px',
  boxShadow:' 0 0 10px 4px #524c4c',
}))

export const InfoStack=styled(Stack)(({theme})=>({
    gap:'16px',
    [theme.breakpoints.down('sm')]:{
        gap:'8px'
    }
}))