import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// Delete a listing 

export default defineEventHandler(async (event) => {
    const {listingId} = event.context.params;

    return await prisma.car.delete({
        where: {
            id: parseInt(listingId)
        }
    })
})