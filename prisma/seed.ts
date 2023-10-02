import { hash } from "bcryptjs";
import { prisma } from '../src/lib/prisma'


async function createAdmUsers() {
    await prisma.user.create({
        data: {
            user_name: 'gerencia',
            user_email: 'gerencia@teste.com',
            user_id: '1',
            user_type: 'gerencia',
            password_hash: await hash('123456', 6)
        }
    })

    await prisma.user.create({
        data: {
            user_name: 'secretaria',
            user_email: 'secretaria@teste.com',
            user_id: '2',
            user_type: 'secretaria',
            password_hash: await hash('123456', 6)
        }
    })
}

createAdmUsers()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });