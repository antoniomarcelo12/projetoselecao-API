import { Prisma, User } from "@prisma/client";

export interface UsersRepository {
    create(data: Prisma.UserCreateInput): Promise<User>
    findByUsername(userName: string): Promise<User | null>
    findByEmail(userEmail: string): Promise<User | null>
    getAllUsers(): Promise<User[] | null>
    // findById(id: string): Promise<UserUpdateInput | null>
}