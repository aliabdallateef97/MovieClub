import React from "react";
import { getActorData } from "@/features/actor/services";
import { useParams } from "react-router-dom";
import { ActorDetails, ActorImg } from "./style";
import { Container, DarkTypography, GrayTypography } from "@/core/styles";
import { Stack } from "@mui/material";
import { ActorMovie ,ActorSkeleton} from ".";
import { MetaData } from "@/core/components";

const actor = () => {
  const { id } = useParams();
  const { data ,isLoading } = getActorData(id);

  return (
    <Container>
      <MetaData loading={isLoading} LoadingSkeleton={ActorSkeleton}>
      <ActorDetails>
          <ActorImg image={data?.img} component="img" alt={data?.name}/>
        <Stack gap="20px" width="100%">
          <DarkTypography variant="h3" responsive="26px">{data?.name}</DarkTypography>
          <GrayTypography variant="h5">{data?.biography}</GrayTypography>
        </Stack>
      </ActorDetails>
      </MetaData>
      <ActorMovie id={id}/>
    </Container>
  );
};

export default actor;
