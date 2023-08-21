import {  useQuery } from "@tanstack/react-query";
import { request } from "@/core/utils/axios";
import {cast} from '@/features/movieDetails/models'

const movieCasting = (payload) => {
    if(payload.tv){
        return request({
            url:`tv/${payload.id}/credits?api_key=3e21184f03d65304d7cd0f6382c5f7e0`
        })
    }else{
        return request({
            url:`movie/${payload.id}/credits?api_key=3e21184f03d65304d7cd0f6382c5f7e0`
        })
    }
};




export const getMovieCasting=(payload)=>{
    return useQuery({
        queryKey:['movie-casting'],
        queryFn:()=>movieCasting(payload),
        select:(data)=>cast(data)
    })
}


