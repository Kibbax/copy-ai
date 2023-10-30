import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();
 
export async function createInput(req, _res) {
  const newInput = await prisma.content_input.create({
    data: {
      userId:1,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minima in suscipit totam, mollitia blanditiis."/* req.body.prompt */,
      networkType: "Instagram"/* req.body.value */,
      targetAge: "15-25" /* req.body.targetAge */,
    },
  });
 
  const inputs = await prisma.content_input.findMany();
}