import { User } from "@prisma/client";
import { UsersRepository } from "../repositories/users-repository";
import { UserAlreadyExistsError } from "./errors/user-already-exists-error";
import { randomUUID } from "crypto";
import { UserDontExistsError } from "./errors/user-dont-exists-error";


export class DeleteUserUseCase {
    constructor(private usersRepository: UsersRepository){
    }

    async execute(user_id: string) {
        
        const userWithThidId = await this.usersRepository.findById(user_id)
        
        if(!userWithThidId){
            throw new UserDontExistsError()
        }

        this.usersRepository.delete(user_id)
    }
}