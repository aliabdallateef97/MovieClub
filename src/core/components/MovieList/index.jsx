import React from "react";
import { PaginationSlider, MovieCard } from "@/core/components";
import { Stack } from "@mui/material";
import { CustomedSplide, DarkTypography } from "@/core/styles";
import { useNavigate } from "react-router-dom";


const MovieList = ({api ,title,tv,movieId,text}) => {
  const navigte =useNavigate()

  const { data, hasNextPage, isFetchingNextPage, isLoading, fetchNextPage } =
  api({tv,movieId});
  
  const clickMovieHandler=(id)=>{
    navigte(`/movie-detail/${id}`)
  }
    
  return (
    <Stack gap='10px' marginTop='10px'>
        <DarkTypography variant="h2" responsive="18px">{title}</DarkTypography>
    <PaginationSlider
      data={data}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      isLoading={isLoading}
      fetchNextPage={fetchNextPage}
      >
        {data?.map((movie) => (
        <CustomedSplide key={movie?.id}>
          <MovieCard
            title={movie?.title}
            rate={movie?.rate}
            img={movie?.img}
            onClick={()=>clickMovieHandler(movie?.id)}
            />
            </CustomedSplide>
          ))}
          {!data?.length && <DarkTypography variant="h4" sx={{textAlign:'center',marginTop:'20px'}}>{text}</DarkTypography>}
      </PaginationSlider>
      </Stack>
  );
};


export default React.memo(MovieList);
