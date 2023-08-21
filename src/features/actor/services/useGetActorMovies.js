import { useQuery } from "@tanstack/react-query";
import { request } from "@/core/utils/axios";
import {movie} from '@/features/actor/models'

const actorMovies = (id) => {
    return request(
      {
        url: `person/${id}/movie_credits?api_key=3e21184f03d65304d7cd0f6382c5f7e0`,
      },
    );
}



export const getActorMovies=(id)=>{
    return useQuery({
        queryKey:['actor-movies',id],
        queryFn:()=>actorMovies(id),
        select:(data)=>movie(data)
    })
}
