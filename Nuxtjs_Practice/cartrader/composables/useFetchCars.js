export default async (city, filters) => {
    const {data,error,refresh} = await useFetch(`/api/cars/${city}`,{
        params: {
            ...filters
        }
    })
    if(error.value){
        console.log(filters)
        throw createError({
            // ...error.value,
            statusCode: error.value.statusCode,
            statusMessage: error.value.statusMessage
        })
    }
    return {data, refresh}
}