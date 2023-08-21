import React from "react";
import { getMovieCasting } from "../../services";
import { useSelector } from "react-redux";
import * as selectors from "@/core/config/import/selectors";
import { useParams } from "react-router-dom";
import { DarkTypography, GrayTypography, MainSplide } from "@/core/styles";
import { ActorDetails, ActorImg, CastCard } from "./style";
import { Stack, useTheme } from "@mui/material";
import { MetaData } from "@/core/components";
import { CastingSkeleton } from "..";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const index = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const tv = useSelector(selectors.tv);
  const theme = useTheme();
  const { data, isLoading } = getMovieCasting({ id, tv });

  const navigateToActorPage = (id) => {
    navigate(`/actor/${id}`);
  };

  return (
    <Stack sx={{ marginTop: "40px", gap: "6px" }}>
      <DarkTypography variant="h2" responsive="18px">
        {<FormattedMessage id="movie.cast" />}
      </DarkTypography>
      <MetaData loading={isLoading} LoadingSkeleton={CastingSkeleton}>
        <MainSplide
          options={{
            fixedWidth: "180px",
            arrows: false,
            pagination: false,
            gap: "1rem",
            direction: theme.direction === "ltr" ? "ltr" : "rtl",
            drag: "free",
          }}
        >
          {data?.map((cast) => (
            <CastCard
              key={cast?.id}
              onClick={() => navigateToActorPage(cast?.id)}
            >
              <ActorImg image={cast?.img} />
              <ActorDetails>
                <GrayTypography variant="h4">{cast?.name}</GrayTypography>
                <GrayTypography variant="h5" sx={{ textAlign: "center" }}>
                  {cast?.character}
                </GrayTypography>
              </ActorDetails>
            </CastCard>
          ))}
        </MainSplide>
      </MetaData>
    </Stack>
  );
};

export default index;
