import { useInfiniteQuery } from "@tanstack/react-query";
import { request } from "@/core/utils/axios";
import {MovieList} from '@/features/home/models'

const romanceSeries = (page=1) => {
    return request(
      {
        url: `discover/tv?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=10749&page=${page}`,
      },
    );
  }

  const romance = (page=1) =>{
    return request(
      {
        url: `discover/movie?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=10749&page=${page}`,
      },
    );
  }




export const getRomanceMovies = () => {
  return useInfiniteQuery({
    queryKey: ["romance-movies"],
    queryFn: ({ pageParam = 1 }) => romance(pageParam),
    getNextPageParam: (lastPage, pages) => {
      const total = lastPage?.data?.total_pages;
      const nextPage = pages?.length + 1;
      return nextPage <= total ? nextPage : undefined;
    },
    select: (data) => [].concat(...data?.pages?.map((page) => MovieList(page))),
  });
};


export const getRomanceSeries = () => {
  return useInfiniteQuery({
    queryKey: ["romance-series"],
    queryFn: ({ pageParam = 1 }) => romanceSeries(pageParam),
    getNextPageParam: (lastPage, pages) => {
      const total = lastPage?.data?.total_pages;
      const nextPage = pages?.length + 1;
      return nextPage <= total ? nextPage : undefined;
    },
    select: (data) => [].concat(...data?.pages?.map((page) => MovieList(page))),
  });
};


