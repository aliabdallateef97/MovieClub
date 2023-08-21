import { Container, TitleStack } from "./style";
import { FormControl, MenuItem, Select } from "@mui/material";
import { GrayTypography } from "@/core/styles";
import { FormattedMessage } from "react-intl";

const typeOptions = [
  { key: <FormattedMessage id="movie.movies" />, value: "movies" },
  { key: <FormattedMessage id="movie.series" />, value: "series" },
  { key: <FormattedMessage id="movie.actors" />, value: "actors" },
];

const FilterOptions = ({ handleTypeValue, type }) => {
  return (
    <Container>
      <TitleStack>
        <GrayTypography>{<FormattedMessage id="movie.type" />}</GrayTypography>
        <FormControl variant="standard" sx={{ m: 1, width: "100%" }}>
          <Select value={type} onChange={handleTypeValue}>
            {typeOptions?.map((opt) => (
              <MenuItem value={opt.value} key={opt.key}>
                {opt.key}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </TitleStack>
    </Container>
  );
};

export default FilterOptions;
