import { Banner, SwitchButton } from ".";
import {
  getTrendingMovies,
  getTrendingSeries,
  getTopRatedMovies,
  getTopRatedSeries,
  getActionMovies,
  getActionSeries,
  getAnimationSeries,
  getComedyMovies,
  getDramaMovies,
  getFamilyMovies,
  getCrimeMovies,
  getAnimationMovies,
  getRomanceMovies,
  getHorrorMovies,
  getRomanceSeries,
  getComedySeries,
  getDramaSeries,
  getCrimeSeries,
  getFamilySeries,
} from "@/features/home/services";
import { MovieList } from "@/core/components";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import * as selectors from "@/core/config/import/selectors";
import { Container } from "@/core/styles";

const Home = () => {
  const tv = useSelector(selectors.tv);

  return (
    <>
      <Banner />
      <Container>
        <SwitchButton />
        {tv ? (
          <>
            <MovieList
              api={getTrendingSeries}
              title={<FormattedMessage id="movie.trending" />}
            />
            <MovieList
              api={getTopRatedSeries}
              title={<FormattedMessage id="movie.toprated" />}
            />

            <MovieList
              api={getActionSeries}
              title={<FormattedMessage id="movie.action" />}
            />
            <MovieList
              api={getRomanceSeries}
              title={<FormattedMessage id="movie.romance" />}
            />
            <MovieList
              api={getComedySeries}
              title={<FormattedMessage id="movie.comedy" />}
            />
            <MovieList
              api={getDramaSeries}
              title={<FormattedMessage id="movie.drama" />}
            />
            <MovieList
              api={getCrimeSeries}
              title={<FormattedMessage id="movie.crime" />}
            />
            <MovieList
              api={getFamilySeries}
              title={<FormattedMessage id="movie.family" />}
            />
            <MovieList
              api={getAnimationSeries}
              title={<FormattedMessage id="movie.animation" />}
            />
          </>
        ) : (
          <>
            <MovieList
              api={getTrendingMovies}
              title={<FormattedMessage id="movie.trending" />}
            />
            <MovieList
              api={getTopRatedMovies}
              title={<FormattedMessage id="movie.toprated" />}
            />
            <MovieList
              api={getActionMovies}
              title={<FormattedMessage id="movie.action" />}
            />
            <MovieList
              api={getRomanceMovies}
              title={<FormattedMessage id="movie.romance" />}
            />
            <MovieList
              api={getComedyMovies}
              title={<FormattedMessage id="movie.comedy" />}
            />
            <MovieList
              api={getDramaMovies}
              title={<FormattedMessage id="movie.drama" />}
            />
            <MovieList
              api={getHorrorMovies}
              title={<FormattedMessage id="movie.horror" />}
            />
            <MovieList
              api={getCrimeMovies}
              title={<FormattedMessage id="movie.crime" />}
            />
            <MovieList
              api={getFamilyMovies}
              title={<FormattedMessage id="movie.family" />}
            />
            <MovieList
              api={getAnimationMovies}
              title={<FormattedMessage id="movie.animation" />}
            />
          </>
        )}
      </Container>
    </>
  );
};

export default Home;
