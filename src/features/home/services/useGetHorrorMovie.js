import { useInfiniteQuery } from "@tanstack/react-query";
import { request } from "@/core/utils/axios";
import {MovieList} from '@/features/home/models'

const horrorMovies = (page=1) => {
      return request(
        {
          url: `discover/movie?api_key=3e21184f03d65304d7cd0f6382c5f7e0&with_genres=27&page=${page}`,
        },
      );
  }



export const getHorrorMovies = () => {
  return useInfiniteQuery({
    queryKey: ["horror-movies"],
    queryFn: ({ pageParam = 1 }) => horrorMovies(pageParam),
    getNextPageParam: (lastPage, pages) => {
      const total = lastPage?.data?.total_pages;
      const nextPage = pages?.length + 1;
      return nextPage <= total ? nextPage : undefined;
    },
    select: (data) => [].concat(...data?.pages?.map((page) => MovieList(page))),
  });
};


