export const actor=(data)=>{
    return {
        biography:data?.data?.biography,
        name:data?.data?.name,
        img:`https://image.tmdb.org/t/p/original/${data?.data?.profile_path}`
    }
}