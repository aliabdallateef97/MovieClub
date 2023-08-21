import { useTheme } from "@mui/material";
import { MainSplide, CustomedSplide } from "@/core/styles";
import { MetaData } from "@/core/components/index";
import { SplideTrack } from "@splidejs/react-splide";
import { MovieSkeleton } from "@/core/components/index";
import LoadingButton from '@mui/lab/LoadingButton';

const MovieSlider = (props) => {
  const theme = useTheme();
  const { data, hasNextPage, isFetchingNextPage, isLoading, fetchNextPage  } =
    props;

  const handleMove = (splide) => {
    if (splide.index + 1 >= data?.length && hasNextPage) {
      fetchNextPage();
    }
  };

  return (
      <MetaData loading={isLoading} LoadingSkeleton={MovieSkeleton}>
        <MainSplide
          hasTrack={false}
          onMove={handleMove}
          options={{
            fixedWidth: "140px",
            gap: "1rem",
            pagination: false,
            direction: theme.direction === "ltr" ? "ltr" : "rtl",
            arrows:data?.length > 1
          }}
        >
          <SplideTrack>
            {props.children}
            <CustomedSplide
              sx={{
                width: "80px !important",
                alignItems: "center",
                display: "flex",
              }}
            >
              {hasNextPage && (
                <LoadingButton
                  variant="text"
                  loading={isFetchingNextPage}
                >
                </LoadingButton>
              )}
            </CustomedSplide>
          </SplideTrack>
        </MainSplide>
      </MetaData>
  );
};

export default MovieSlider;
