import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"
import { makeUpdateUserUseCase } from "../../use-cases/factories/make-update-user"
import { UserDontExistsError } from "../../use-cases/errors/user-dont-exists-error"

interface UpdateUserQueryParam {
    userid: string
}

export async function UpdateUserController(request: FastifyRequest, reply: FastifyReply) {

    const requestBodyUpdateUserSchema = z.object({
        user_fullname: z.string().optional(),
        user_name: z.string().optional(),
        user_age: z.number().optional(),
        user_email: z.string().email().optional(),
        user_ocupation: z.string().optional(),
        user_phone: z.string().optional(),
    })

    const queryParam = request.query as UpdateUserQueryParam
    const userId = queryParam.userid


    const { user_fullname, user_name, user_age, user_email, user_ocupation, user_phone } = requestBodyUpdateUserSchema.parse(request.body)

    try {

        const updateUserUseCase = makeUpdateUserUseCase()
        
        const user = await updateUserUseCase.execute({ 
            user_id: userId,
            user_fullname, 
            user_name, 
            user_age, 
            user_email, 
            user_ocupation, 
            user_phone 
        })
        
        return reply.status(200).send({
            user
        })
    
        

        }catch(err){
            if(err instanceof UserDontExistsError){
                return reply.status(409).send({message: err.message})
            }
            throw err
        }
}