import { useInfiniteQuery } from "@tanstack/react-query";
import { request } from "@/core/utils/axios";
import {MovieList} from '@/features/home/models'

const crimeSeries = (page=1) => {
    return request(
      {
        url: `discover/tv?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=80&page=${page}`,
      },
    );
  }
    const crimeMovies = (page=1) => {
    return request(
      {
        url: `discover/movie?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=80&page=${page}`,
      },
    );
  }
  




export const getCrimeMovies = () => {
  return useInfiniteQuery({
    queryKey: ["crime-movies"],
    queryFn: ({ pageParam = 1 }) => crimeMovies(pageParam),
    getNextPageParam: (lastPage, pages) => {
      const total = lastPage?.data?.total_pages;
      const nextPage = pages?.length + 1;
      return nextPage <= total ? nextPage : undefined;
    },
    select: (data) => [].concat(...data?.pages?.map((page) => MovieList(page))),
  });
};


export const getCrimeSeries = () => {
  return useInfiniteQuery({
    queryKey: ["crime-series"],
    queryFn: ({ pageParam = 1 }) => crimeSeries(pageParam),
    getNextPageParam: (lastPage, pages) => {
      const total = lastPage?.data?.total_pages;
      const nextPage = pages?.length + 1;
      return nextPage <= total ? nextPage : undefined;
    },
    select: (data) => [].concat(...data?.pages?.map((page) => MovieList(page))),
  });
};

