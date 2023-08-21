import {request} from '@/core/utils/axios'
import { useQuery } from '@tanstack/react-query'
import { trailer } from '../models'


const movieTrailer=(payload)=>{
    if(payload.tv){
        return request({
            url:`tv/${payload.id}?api_key=3e21184f03d65304d7cd0f6382c5f7e0&append_to_response=videos`
        })
    }else{
        return request({
            url:`movie/${payload.id}?api_key=3e21184f03d65304d7cd0f6382c5f7e0&append_to_response=videos`
        })
    }
}

export const getMovieTrailer=(payload)=>{
    return useQuery({
        queryKey:['movie-trailer',payload.id],
        queryFn:()=>movieTrailer(payload),
        select:(data)=>trailer(data)
    })
}