export default defineEventHandler(async (event) => {
    const {code} = event.context.params
    const {currencyKey} = useRuntimeConfig()
    // const key = 'uuYQwXryBoipVE4N5OwIikD1ZvcgFCJWML7P7VGr'
    // const uri = `https://api.currencyapi.com/v3/latest?apikey=${key}&currencies=${code}`
    const uri = `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}&currencies=${code}`

    const { data } = await $fetch(uri)

    return data
})