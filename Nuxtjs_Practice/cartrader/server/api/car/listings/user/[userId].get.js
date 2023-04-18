import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// View my listings

export default defineEventHandler(async (event) => {
    const {userId} = event.context.params;

    return await prisma.car.findMany({
        where: {
            listerId: userId
        },
        select: {
            image: true,
            id: true,
            name: true,
            price: true
        }
    })
})