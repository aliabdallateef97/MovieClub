import { Stack ,styled } from "@mui/material";

export const MainStack =styled(Stack)(({theme})=>({
    width:'100%',
    backgroundColor:theme.palette.primary.light,
    position:'relative',
    border: `1px solid ${theme.palette.secondary.light}`,
    borderRadius:'10px',
    padding:'6px 10px',
    gap:'6px',
    maxHeight:'300px',
    overflow:'auto'
}))