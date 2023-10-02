import { Prisma, User } from "@prisma/client";
import { UpdateUserUseCaseRequestParams } from "../use-cases/update-user";

export interface UsersRepository {
    create(data: Prisma.UserCreateInput): Promise<User>
    findByUsername(userName: string): Promise<User | null>
    findByEmail(userEmail: string): Promise<User | null>
    getAllUsers(): Promise<User[] | null>
    findById(id: string): Promise<User | null>
    delete(userId: string): void;
    update(data: UpdateUserUseCaseRequestParams): Promise<User>;
}