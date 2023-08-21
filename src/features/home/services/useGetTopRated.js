import { useInfiniteQuery } from "@tanstack/react-query";
import { request } from "@/core/utils/axios";
import {MovieList} from '@/features/home/models'

const topRatedSeries = (page=1,payload) => {
    return request(
      {
        url: `tv/top_rated?api_key=3e21184f03d65304d7cd0f6382c5f7e0&language=en_US&page=${page}`,
      },
    );
  }
  const topRated = (page=1,payload) =>{
    return request(
      {
        url: `movie/top_rated?api_key=3e21184f03d65304d7cd0f6382c5f7e0&language=en_US&page=${page}`,
      },
    );
  }
 




export const getTopRatedMovies = () => {
  return useInfiniteQuery({
    queryKey: ["toprated-movies"],
    queryFn: ({ pageParam = 1 }) => topRated(pageParam),
    getNextPageParam: (lastPage, pages) => {
      const total = lastPage?.data?.total_pages;
      const nextPage = pages?.length + 1;
      return nextPage <= total ? nextPage : undefined;
    },
    select: (data) => [].concat(...data?.pages?.map((page) => MovieList(page))),
  });
};


export const getTopRatedSeries = () => {
  return useInfiniteQuery({
    queryKey: ["toprated-series"],
    queryFn: ({ pageParam = 1 }) => topRatedSeries(pageParam),
    getNextPageParam: (lastPage, pages) => {
      const total = lastPage?.data?.total_pages;
      const nextPage = pages?.length + 1;
      return nextPage <= total ? nextPage : undefined;
    },
    select: (data) => [].concat(...data?.pages?.map((page) => MovieList(page))),
  });
};

