export const search=(data)=>{
    return data?.data?.results?.map((sh)=>({
        title:sh?.title,
        name:sh?.name,
        id:sh?.id,
    }))
}