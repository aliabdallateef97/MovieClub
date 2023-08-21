import { useInfiniteQuery } from "@tanstack/react-query";
import { request } from "@/core/utils/axios";
import {MovieList} from '@/features/home/models'

const trendingSeries = (page=1) => {
    return request(
      {
        url: `trending/tv/week?api_key=3e21184f03d65304d7cd0f6382c5f7e0&page=${page}`,
      },
      );
    }

    const trending = (page=1) => {
      return request(
        {
          url: `trending/movie/week?api_key=3e21184f03d65304d7cd0f6382c5f7e0&page=${page}`,
        },
      );
    }
    



export const getTrendingMovies = () => {
  return useInfiniteQuery({
    queryKey: ["trending-movies"],
    queryFn: ({ pageParam = 1 }) => trending(pageParam),
    getNextPageParam: (lastPage, pages) => {
      const total = lastPage?.data?.total_pages;
      const nextPage = pages?.length + 1;
      return nextPage <= total ? nextPage : undefined;
    },
    select: (data) => [].concat(...data?.pages?.map((page) => MovieList(page))),
  });
};


export const getTrendingSeries = () => {
  return useInfiniteQuery({
    queryKey: ["trending-series"],
    queryFn: ({ pageParam = 1 }) => trendingSeries(pageParam),
    getNextPageParam: (lastPage, pages) => {
      const total = lastPage?.data?.total_pages;
      const nextPage = pages?.length + 1;
      return nextPage <= total ? nextPage : undefined;
    },
    select: (data) => [].concat(...data?.pages?.map((page) => MovieList(page))),
  });
};


