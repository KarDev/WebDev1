// import cars from "@/data/cars.json"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


export default defineEventHandler(async (event) => {
    const {city} = event.context.params
    const {make, minPrice, maxPrice} = getQuery(event)

    // let filteredCars = cars.filter( car => {
    //     return car.city.toLowerCase() === city.toLowerCase()
    // })

    // if(make){
    //     filteredCars = filteredCars.filter(car => {
    //         return car.make.toLowerCase() == make.toLowerCase()
    //     })
    // }
    // if(minPrice){
    //     filteredCars = filteredCars.filter(car => {
    //         return car.price >= parseInt(minPrice)
    //     })
    // }
    // if(maxPrice){
    //     filteredCars = filteredCars.filter(car => {
    //         return car.price >= parseInt(maxPrice)
    //     })
    // }

    // return filteredCars

    const filters = {
        city: city.toLowerCase()
    }
    if(make){
        filters.make = make
    }
    if(minPrice || maxPrice){
        filters.price = {}
    }
    if(minPrice) {
        filters.price.lte = parseInt(minPrice)
    }
    if(maxPrice){
        filters.price.gte = parseInt(maxPrice)
    }

    return await prisma.car.findMany({
        where: filters
    })
})