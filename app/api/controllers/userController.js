import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();
 
export default async function createUser() {
  const newUser = await prisma.user.create({
    data: {
      name: 'Elliott',
      email: 'xelliottx@example-user.com',
      password: '12344566'
    },
  });
 
  const users = await prisma.user.findMany();
}