import {request} from '@/core/utils/axios'
import { useQuery } from '@tanstack/react-query'
import { headerMovie } from '../models'

const getHeaderMovie=()=>{
    return request({
        url:'trending/tv/week?api_key=3e21184f03d65304d7cd0f6382c5f7e0&language=en-US'
    })
}

export const useGetHeadderMovie=()=>{
    return useQuery({
        queryKey:['header-movie'],
        queryFn:getHeaderMovie,
        select:(data)=>headerMovie(data)
    })
}