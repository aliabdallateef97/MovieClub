import { useInfiniteQuery } from "@tanstack/react-query";
import { request } from "@/core/utils/axios";
import {MovieList} from '@/features/home/models'

const familySeries = (page=1) => {
    return request(
      {
        url: `discover/tv?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=10751&page=${page}`,
      },
    );
  }

  const familyMovies = (page=1) =>{
    return request(
      {
        url: `discover/movie?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=10751&page=${page}`,
      },
    );
  }
 


export const getFamilyMovies = () => {
  return useInfiniteQuery({
    queryKey: ["family-movies"],
    queryFn: ({ pageParam = 1 }) => familyMovies(pageParam),
    getNextPageParam: (lastPage, pages) => {
      const total = lastPage?.data?.total_pages;
      const nextPage = pages?.length + 1;
      return nextPage <= total ? nextPage : undefined;
    },
    select: (data) => [].concat(...data?.pages?.map((page) => MovieList(page))),
  });
};


export const getFamilySeries = () => {
  return useInfiniteQuery({
    queryKey: ["family-series"],
    queryFn: ({ pageParam = 1 }) => familySeries(pageParam),
    getNextPageParam: (lastPage, pages) => {
      const total = lastPage?.data?.total_pages;
      const nextPage = pages?.length + 1;
      return nextPage <= total ? nextPage : undefined;
    },
    select: (data) => [].concat(...data?.pages?.map((page) => MovieList(page))),
  });
};


