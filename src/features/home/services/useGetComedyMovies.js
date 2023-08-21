import { useInfiniteQuery } from "@tanstack/react-query";
import { request } from "@/core/utils/axios";
import {MovieList} from '@/features/home/models'

const comedySeries = (page=1) => {
    return request(
      {
        url: `discover/tv?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=16&page=${page}`,
      },
    );
  }

    const comedyMoves = (page=1) => {
    return request(
      {
        url: `discover/movie?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=35&page=${page}`,
      },
    );
  }




export const getComedyMovies = (payload) => {
  return useInfiniteQuery({
    queryKey: ["comedy-movies"],
    queryFn: ({ pageParam = 1 }) => comedyMoves(pageParam,payload),
    getNextPageParam: (lastPage, pages) => {
      const total = lastPage?.data?.total_pages;
      const nextPage = pages?.length + 1;
      return nextPage <= total ? nextPage : undefined;
    },
    select: (data) => [].concat(...data?.pages?.map((page) => MovieList(page))),
  });
};


export const getComedySeries = () => {
  return useInfiniteQuery({
    queryKey: ["comedy-series"],
    queryFn: ({ pageParam = 1 }) => comedySeries(pageParam),
    getNextPageParam: (lastPage, pages) => {
      const total = lastPage?.data?.total_pages;
      const nextPage = pages?.length + 1;
      return nextPage <= total ? nextPage : undefined;
    },
    select: (data) => [].concat(...data?.pages?.map((page) => MovieList(page))),
  });
};

