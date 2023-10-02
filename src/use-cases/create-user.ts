import { User } from "@prisma/client";
import { UsersRepository } from "../repositories/users-repository";
import { UserAlreadyExistsError } from "./errors/user-already-exists-error";
import { randomUUID } from "crypto";

interface CreateUserUseCaseRequestParams {
    user_fullname: string,
    user_name: string,
    user_age: number,
    user_email: string,
    user_ocupation: string,
    user_phone: string,
}

export class CreateUserUseCase {
    constructor(private usersRepository: UsersRepository){
    }

    async execute({ user_fullname, user_name, user_age, user_email, user_ocupation, user_phone }: CreateUserUseCaseRequestParams): Promise<User> {
        
        
        const userWithSameEmail = await this.usersRepository.findByEmail(user_email)
        const userWithSameUsername = await this.usersRepository.findByUsername(user_name)

        if(userWithSameEmail || userWithSameUsername){
            throw new UserAlreadyExistsError()
        }


        const newUser = await this.usersRepository.create({
                user_id: randomUUID(),
                user_fullname,
                user_name,
                user_age,
                user_email,
                user_ocupation,
                user_phone,
        })
    
    return newUser

    }
    
}