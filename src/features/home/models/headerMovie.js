
export const headerMovie=(data)=>{
    return data?.data?.results?.map((mv)=>({
        title:mv?.name,
        description:mv?.overview,
        img:`https://image.tmdb.org/t/p/original/${mv?.backdrop_path}`
    }))
}