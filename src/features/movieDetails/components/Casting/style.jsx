import { CardMedia, Stack ,styled } from "@mui/material";
import { SplideSlide } from "@splidejs/react-splide";

export const CastCard=styled(SplideSlide)(({theme})=>({
    borderRadius: '10px',
    boxShadow: '0 0 10px 4px #524c4c',
    // marginRight: '1.4rem',
    overflow: 'hidden',
    backgroundColor: theme.palette.primary.dark,
    margin: '1rem',
    width:'100%',
    cursor:'pointer'
}))

export const ActorImg=styled(CardMedia)(({theme})=>({
maxWidth:'100%',
height:'200px'
}))

export const ActorDetails=styled(Stack)(({theme})=>({
padding:'4px',
gap:'2px',
alignItems:'center',
height:'80px'
}))