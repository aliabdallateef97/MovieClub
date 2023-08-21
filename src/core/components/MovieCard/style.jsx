import { Stack ,Typography,styled } from "@mui/material";

export const Card=styled(Stack)(({theme})=>({
    width:'140px',
    alignItems:'center',
    gap:'6px',
    position:'relative',
    cursor:'pointer',
    '& .imgCard':{
        width:'100%',
        height:'180px',
    }
}))

export const Rate=styled(Stack)(({theme})=>({
position:'absolute',
color: theme.palette.primary.dark,
top: '5px',
right: '15px',
background: '#ffffff9c',
padding: '3px 10px',
borderRadius: '20px',
fontSize: '12px',
fontWeight: 'bold',
}))

export const MovieTitle=styled(Typography)(({theme})=>({
color:theme.palette.primary.dark,
textAlign:'center'
}))