import { Typography ,styled } from "@mui/material";


export const Title =styled(Typography)(({theme})=>({
    color:theme.palette.primary.dark,
    [theme.breakpoints.down('sm')]:{
        fontSize:'18px'
    }
}))