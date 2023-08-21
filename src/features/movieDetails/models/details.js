
export const details=(data)=>{
    return ({
        title:data?.data?.title,
        name:data?.data?.name,
        releaseDate:data?.data?.release_date,
        lastDate:data?.data?.last_air_date,
        description:data?.data?.overview,
        img:`https://image.tmdb.org/t/p/original/${data?.data?.backdrop_path}`,
        poster:`https://image.tmdb.org/t/p/original/${data?.data?.poster_path}`,
    })
}