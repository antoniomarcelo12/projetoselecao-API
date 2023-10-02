import { FastifyReply, FastifyRequest } from "fastify"
import { makeGetAllUsersUseCase } from "../../use-cases/factories/make-get-all-users-use-case"

export async function GetAllUsersController(request: FastifyRequest, reply: FastifyReply) {
    
    // const take = 5
    // const cursor = request.query.cursor ?? ''
    // const cursorObj = cursor === '' ? undefined : {id: parseInt(cursor as string)}

    const getAllUsersUseCase = makeGetAllUsersUseCase()

    const users = await getAllUsersUseCase.execute()
    
    return reply.status(200).send({
        users
    })

   

}