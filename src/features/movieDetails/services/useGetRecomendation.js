import { useInfiniteQuery } from "@tanstack/react-query";
import { request } from "@/core/utils/axios";
import {MovieList} from '@/features/home/models'

const recomendation = (page=1,payload) => {
    if(payload.tv){
        return request({
            url:`tv/${payload.movieId}/recommendations?api_key=3e21184f03d65304d7cd0f6382c5f7e0&page=${page}`
        })
    }else{
        return request({
            url:`movie/${payload.movieId}/recommendations?api_key=3e21184f03d65304d7cd0f6382c5f7e0&page=${page}`
        })
    }
};




export const getRecomendation = (payload) => {
  return useInfiniteQuery({
    queryKey: ["recomend-movies",payload.movieId],
    queryFn: ({ pageParam = 1 }) => recomendation(pageParam,payload),
    getNextPageParam: (lastPage, pages) => {
      const total = lastPage?.data?.total_pages;
      const nextPage = pages?.length + 1;
      return nextPage <= total ? nextPage : undefined;
    },
    select: (data) => [].concat(...data?.pages?.map((page) => MovieList(page))),
  });
};

