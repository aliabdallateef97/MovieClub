import {request} from '@/core/utils/axios'
import { useQuery } from '@tanstack/react-query'
import { actor } from '../models'


const actorData=(id)=>{
        return request({
            url:`person/${id}?api_key=3e21184f03d65304d7cd0f6382c5f7e0`
        })
    }


export const getActorData=(id)=>{
    return useQuery({
        queryKey:['actor-details',id],
        queryFn:()=>actorData(id),
        select:(data)=>actor(data)
    })
}