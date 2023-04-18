import { PrismaClient } from "@prisma/client";
import Joi from "joi"

const schema = Joi.object({
    email : Joi.string().email({
        minDomainSegments:2,
        tlds: {
            allow:["com","net"]
        }
    }).required(),
    phone: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
    name : Joi.string().required(),
    message : Joi.string().min(20).required()

})
const prisma = new PrismaClient()


export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const {listingId} = event.context.params;
    const {error} = await schema.validate(body)

    if(error){
        throw createError({
            statusCode: 412,
            statusMessage: error.message
        })
    }
    const {message, email, phone, name} = body
    return await prisma.message.create({
        data: {
            message,
            email,
            name,
            phone,
            listingId: parseInt(listingId)
        }
    })
})