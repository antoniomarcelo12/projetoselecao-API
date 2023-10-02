import { FastifyReply, FastifyRequest } from "fastify"
import { makeCreateUserUseCase } from "../../use-cases/factories/make-create-user"
import { z } from "zod"
import { UserAlreadyExistsError } from "../../use-cases/errors/user-already-exists-error"

export async function CreateUserController(request: FastifyRequest, reply: FastifyReply) {
   
    const requestBodyCreateUserSchema = z.object({
        user_fullname: z.string(),
        user_name: z.string(),
        user_age: z.number(),
        user_email: z.string().email(),
        user_ocupation: z.string(),
        user_phone: z.string(),
    })

    const { user_fullname, user_name, user_age, user_email, user_ocupation, user_phone } = requestBodyCreateUserSchema.parse(request.body)

    try {

        const createUserUseCase = makeCreateUserUseCase()
        
        const user = await createUserUseCase.execute({ 
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
            if(err instanceof UserAlreadyExistsError){
                return reply.status(409).send({message: err.message})
            }
            throw Error
        }
        

        return reply.status(201).send({ code: 201, message: "usuário cadastrado com sucesso."})

}