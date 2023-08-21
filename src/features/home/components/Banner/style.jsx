import { styled,Typography } from "@mui/material";


export const TitleStyled=styled(Typography)(({theme})=>({
    color: theme.palette.main.light,
    marginBottom: '1rem',
}))

export const DescriptionStyled=styled(Typography)(({theme})=>({
    color: theme.palette.main.light,
    fontSize: '14px',
    lineHeight: '1.5',
    width: '50%',
}))


