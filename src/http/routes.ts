import { FastifyInstance } from "fastify";
import { GetAllUsersController } from "./controllers/get-all-users.controller";
import { CreateUserController } from "./controllers/create-user.controller";

export async function appRoutes(app: FastifyInstance){
    app.post('/create', CreateUserController)
    app.get('/users', GetAllUsersController)
    // app.put('/user/:userid', createRequestController)
    // app.delete('/user/:userid', createRequestController)
}