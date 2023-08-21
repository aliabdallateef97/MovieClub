export const movie=(data)=>{
    return data?.data?.cast?.map(mv=>({
        title:mv?.title,
        rate:mv?.vote_average,
        id:mv?.id,
        img:`https://image.tmdb.org/t/p/original/${mv?.poster_path}`
    }))
}