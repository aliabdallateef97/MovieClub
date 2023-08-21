export const cast=(data)=>{
    return data?.data?.cast?.map((ca)=>({
        name:ca?.name,
        id:ca?.id,
        character:ca?.character,
        img:`https://image.tmdb.org/t/p/original/${ca?.profile_path}`
    }))
}