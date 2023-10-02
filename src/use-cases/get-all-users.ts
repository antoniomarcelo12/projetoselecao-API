import { UsersRepository } from "../repositories/users-repository";
import { User } from "@prisma/client";

export class GetAllUsersUseCase {
    constructor(
        private usersRepository: UsersRepository
    ){}

    async execute(): Promise<User[] | null> {
        const user = await this.usersRepository.getAllUsers()

        return user
    }
}