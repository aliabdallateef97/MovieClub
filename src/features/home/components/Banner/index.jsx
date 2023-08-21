import React, { useEffect, useState } from "react";
import { useGetHeadderMovie } from "@/features/home/services";
import { DescriptionStyled, TitleStyled } from "./style";
import BannerLoading from "./BannerLoading";
import { MetaData } from "@/core/components";
import {Fade ,HeaderStyled} from '@/core/styles'

const Banner = () => {
  const [movie, setMovie] = useState();
  const { data, isLoading } = useGetHeadderMovie();

  useEffect(() => {
    !!data?.length && setMovie(data[Math.floor(Math.random() * data?.length - 1)]);
  }, [data]);

  const cutOverview = (string, n) => {
    return string?.length > n ? string.slice(0, n - 1) + "..." : string;
  };
  return (
    <MetaData loading={isLoading} LoadingSkeleton={BannerLoading} >
    <HeaderStyled
      sx={{
        backgroundImage:`url(${ movie?.img})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <div className="txtBox">
        <TitleStyled variant="h2">{movie?.title}</TitleStyled>
        <DescriptionStyled variant="h3">{cutOverview(movie?.description,150)}</DescriptionStyled>
      </div>
      <Fade />
    </HeaderStyled>
    </MetaData>
  );
};

export default Banner;
