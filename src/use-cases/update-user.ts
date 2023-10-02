import { User } from "@prisma/client";
import { UsersRepository } from "../repositories/users-repository";
import { UserDontExistsError } from "./errors/user-dont-exists-error";

export interface UpdateUserUseCaseRequestParams {
    user_id: string,
    user_fullname?: string,
    user_name?: string,
    user_age?: number,
    user_email?: string,
    user_ocupation?: string,
    user_phone?: string,
}

export class UpdateUserUseCase {
    constructor(private usersRepository: UsersRepository){
    }

    async execute({ user_id, user_fullname, user_name, user_age, user_email, user_ocupation, user_phone }: UpdateUserUseCaseRequestParams): Promise<User> {
        
        const userWithThisId = await this.usersRepository.findById(user_id)

        if(!userWithThisId){
            throw new UserDontExistsError()
        }

        const newUser = await this.usersRepository.update({
                        user_id, 
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