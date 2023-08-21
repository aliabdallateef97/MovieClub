import { MetaData, MovieCard } from "@/core/components";
import { CustomedSplide, DarkTypography, MainSplide } from "@/core/styles";
import { Stack ,useTheme} from "@mui/material";
import { getActorMovies } from "@/features/actor/services";
import { MovieSkeleton } from "@/core/components";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";;


const index = ({id}) => {
  const theme =useTheme()
  const navigate =useNavigate()
  const { data, isLoading } = getActorMovies(id);

  const clickMovieHandler=(movieId)=>{
    navigate(`/movie-detail/${movieId}`)
  }

  return (
    <Stack sx={{ marginTop: "40px" ,gap:'6px'}}>
      <DarkTypography variant="h2" responsive="18px">{<FormattedMessage id="movie.known"/>}</DarkTypography>
      <MetaData loading={isLoading} LoadingSkeleton={MovieSkeleton}>
        <MainSplide
          options={{
            fixedWidth: "140px",
            pagination: false,
            gap: "1rem",
            drag: "free",
            direction: theme.direction === "ltr" ? "ltr" : "rtl",
          }}
        >
          {data?.map((movie) => (
            <CustomedSplide key={movie?.id}>
              <MovieCard
                title={movie?.title}
                rate={movie?.rate}
                img={movie?.img}
                onClick={() => clickMovieHandler(movie?.id)}
              />
            </CustomedSplide>
          ))}
        </MainSplide>
      </MetaData>
    </Stack>
  );
};

export default index;
