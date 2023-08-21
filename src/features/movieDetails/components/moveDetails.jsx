import {
  useGetMovieDetails,
  getRecomendation,
} from "@/features/movieDetails/services";
import { useParams } from "react-router-dom";
import {
  Fade,
  HeaderStyled,
  Container,
  DarkTypography,
  GrayTypography,
} from "@/core/styles";
import { useSelector } from "react-redux";
import * as selectors from "@/core/config/import/selectors";
import { CustomedPoster, DetailsStack, InfoStack } from "./styles";
import { Casting, Trailer, MoveDetailsSkeleton } from ".";
import { MovieList, MetaData } from "@/core/components";
import { FormattedMessage } from "react-intl";

const MoveDetails = () => {
  const { id } = useParams();
  const tv = useSelector(selectors.tv);
  const { data, isLoading } = useGetMovieDetails({ id, tv });

  return (
    <>
      <MetaData loading={isLoading} LoadingSkeleton={MoveDetailsSkeleton}>
        <HeaderStyled
          sx={{
            backgroundImage: `url(${data?.img})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        >
          <Fade />
        </HeaderStyled>
        <Container>
          <DetailsStack>
            <CustomedPoster src={data?.poster} />
            <InfoStack>
              <DarkTypography variant="h2" responsive="18px">
                {tv ? data?.name : data?.title}
              </DarkTypography>
              <GrayTypography variant="h4" responsive="12px">
                {tv ? data?.lastDate : data?.releaseDate}
              </GrayTypography>
              <GrayTypography variant="h4" responsive="12px">
                {data?.description}
              </GrayTypography>
            </InfoStack>
          </DetailsStack>
        </Container>
      </MetaData>
      <Container>
        <Casting />
        <Trailer />
        <MovieList
          api={getRecomendation}
          title={<FormattedMessage id="movie.recommendations" />}
          tv={tv}
          movieId={id}
          text={<FormattedMessage id="movie.noRecommend" />}
        />
      </Container>
    </>
  );
};

export default MoveDetails;
