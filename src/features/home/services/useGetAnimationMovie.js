import { useInfiniteQuery } from "@tanstack/react-query";
import { request } from "@/core/utils/axios";
import {MovieList} from '@/features/home/models'

const animationSeries = (page=1) => {
    return request(
      {
        url: `discover/tv?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=16&page=${page}`,
      },
    );
    }

    const animationMovies = (page=1) => {
    return request(
      {
        url: `discover/movie?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=16&page=${page}`,
      },
    );
  }




export const getAnimationMovies = (payload) => {
  return useInfiniteQuery({
    queryKey: ["animation-movies"],
    queryFn: ({ pageParam = 1 }) => animationMovies(pageParam,payload),
    getNextPageParam: (lastPage, pages) => {
      const total = lastPage?.data?.total_pages;
      const nextPage = pages?.length + 1;
      return nextPage <= total ? nextPage : undefined;
    },
    select: (data) => [].concat(...data?.pages?.map((page) => MovieList(page))),
  });
};

export const getAnimationSeries = () => {
  return useInfiniteQuery({
    queryKey: ["animation-series"],
    queryFn: ({ pageParam = 1 }) => animationSeries(pageParam),
    getNextPageParam: (lastPage, pages) => {
      const total = lastPage?.data?.total_pages;
      const nextPage = pages?.length + 1;
      return nextPage <= total ? nextPage : undefined;
    },
    select: (data) => [].concat(...data?.pages?.map((page) => MovieList(page))),
  });
};


