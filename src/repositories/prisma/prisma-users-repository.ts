import { prisma } from "../../lib/prisma";
import { Prisma } from "@prisma/client";
import { UsersRepository } from "../users-repository";

export class PrismaUsersRepository implements UsersRepository {
    
    async create(data: Prisma.UserCreateInput) {
        const user = await prisma.user.create({
            data,
        })
    
        return user
    }
    async findByEmail(userEmail: string) {
            const user = await prisma.user.findUnique({
            where: {
                user_email: userEmail
            }
        })

        return user
    }

    async findByUsername(userName: string) {
        const user = await prisma.user.findUnique({
            where: {
                user_name: userName
            }
        })
        
        return user
    }
    
    async getAllUsers() {
        const users = await prisma.user.findMany()
        
        return users
    }

    // async findById(user_id: string) {
    //     const user = await prisma.user.findUnique({
    //         where: {
    //             user_id
    //         }
    //     })

    //     return user
    // }
}