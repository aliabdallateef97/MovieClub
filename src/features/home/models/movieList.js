
export const MovieList=(data)=>{
    return data?.data?.results?.map((mv)=>({
        title:mv?.title,
        rate:mv?.vote_average,
        id:mv?.id,
        img:`https://image.tmdb.org/t/p/original/${mv?.poster_path}`
    }))
}