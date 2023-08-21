import { styled } from "@mui/material";
import { Splide,SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export const MainSplide=styled(Splide)(({theme})=>(props)=>({
    display:'flex',
    visibility:'visible',
    // justifyContent: 'center',
    '& .splide__arrow':{
        alignItems: 'center',
        background: 'none !important',
        border: '0',
        borderRadius: '50%',
        cursor: 'pointer',
        display: 'flex',
        height: '2em',
        justifyContent: 'center',
        opacity: .7,
        padding: 0,
        position: 'absolute',
        top:props.top?props.top: '-10% !important',
        transform: 'translateY(-50%)',
        zIndex: 1,
        // [theme.breakpoints.down('sm')]:{
        //     width: 'fit-content !important',
        // }
    },
    '& .splide__arrow svg':{
        fill: theme.palette.primary.dark,
        height: '1.6em',
        width: '1.6em',
    },
    '& .splide__arrows--rtl .splide__arrow--prev':{
        left: 'auto',
        right: props.right?props.right:'94% !important',
    },
    '& .splide__arrows--ltr .splide__arrow--prev':{
        left: 'auto',
        right:props.right?props.right: '6% !important',
    },
    '& .splide__arrows--rtl .splide__arrow--next':{
        left: 'auto',
        right:props.left?props.left: '98% !important',
    },
    '& .splide__arrows--ltr .splide__arrow--next':{
        left: 'auto',
        right:props.left?props.left: '2% !important',
    },
    [theme.breakpoints.down('sm')]:{
        '& .splide__arrow':{
            display:'none'
        },
    }
}))



export const CustomedSplide=styled(SplideSlide)(({theme})=>({
    // list-style-type: none!important;
    margin: 0,
    position: 'relative',
    // padding: '10px 0',
    width:'100%',
    [theme.breakpoints.down('sm')]:{
        width: 'fit-content !important',
    }
}))