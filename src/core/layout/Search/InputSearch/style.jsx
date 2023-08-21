import { TextField, styled } from "@mui/material";

export const SearchText = styled(TextField)(({ theme }) => ({
    borderRadius: "10px",
    width:'100%',
    backgroundColor:theme.palette.primary.light,
    position:'relative',
    border: `1px solid ${theme.palette.secondary.light}`,
    "& .MuiInputBase-root ":{
        color:theme.palette.secondary.main,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: `none`,
},
"& .MuiInputBase-input": {
    padding: "12px",
    fontSize:  '16px',
    fontWeight: '400',
},
}));



