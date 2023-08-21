import React from "react";
import { SearchText } from "./style";
import { InputAdornment,useTheme } from "@mui/material";
import { useIntl } from "react-intl";
import { SearchIcon,FormatList } from "@/core/config/import/icons";

const InputSearch = ({ value, onChange, name, onClick }) => {
  const intel = useIntl();
  const theme =useTheme()

  return (
    <SearchText
      placeholder={intel.formatMessage({ id: "movie.search" })}
      variant="outlined"
      name={name}
      onChange={onChange}
      value={value}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <FormatList
              style={{ cursor: "pointer" }}
              onClick={onClick}
              sx={{color:theme.palette.primary.dark}}
            />
          </InputAdornment>
        ),
        startAdornment: (
          <InputAdornment position="end">
            <SearchIcon sx={{color:theme.palette.primary.dark}}/>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default InputSearch;
