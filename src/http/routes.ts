import { FastifyInstance } from "fastify";
import { GetAllUsersController } from "./controllers/get-all-users.controller";
import { CreateUserController } from "./controllers/create-user.controller";
import { deleteUserController } from "./controllers/delete-user-controller";
import { UpdateUserController } from "./controllers/update-user.controller";

export async function appRoutes(app: FastifyInstance){
    app.post('/create', CreateUserController)
    app.get('/users', GetAllUsersController)
    app.delete('/user/:userid', deleteUserController)
    app.put('/user/:userid', UpdateUserController)
}