import {request} from '@/core/utils/axios'
import { useQuery } from '@tanstack/react-query'
import { details } from '../models'


const getMovieDetails=(payload)=>{
    if(payload.tv){
        return request({
            url:`tv/${payload.id}?api_key=3e21184f03d65304d7cd0f6382c5f7e0`
        })
    }else{
        return request({
            url:`movie/${payload.id}?api_key=3e21184f03d65304d7cd0f6382c5f7e0`
        })
    }
}

export const useGetMovieDetails=(payload)=>{
    return useQuery({
        queryKey:['movie-details',payload.id],
        queryFn:()=>getMovieDetails(payload),
        select:(data)=>details(data)
    })
}