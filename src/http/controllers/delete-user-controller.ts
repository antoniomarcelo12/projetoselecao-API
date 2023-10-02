import { FastifyReply, FastifyRequest } from "fastify"
import { makeDeleteUserUseCase } from "../../use-cases/factories/make-delete-user"
import { UserDontExistsError } from "../../use-cases/errors/user-dont-exists-error"

interface DeleteUserQueryParam {
    userid: string
}

export async function deleteUserController(request: FastifyRequest, reply: FastifyReply) {
   
    const queryParam = request.query as DeleteUserQueryParam
    const userId = queryParam.userid

    try {

        const deleteUserUseCase = makeDeleteUserUseCase()
        
        await deleteUserUseCase.execute(userId)
        
        return reply.status(200).send({ message: "usuário apagado com sucesso."})
        
    }catch(err){
        if(err instanceof UserDontExistsError){
            return reply.status(404).send({message: err.message})
        }
        throw Error
    }
}