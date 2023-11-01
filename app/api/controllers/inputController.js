import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();
 
export async function createInput(req, _res) {
  const newInput = await prisma.content_input.create({
    data: {
      userId:1,
      content: req.body.prompt /* "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minima in suscipit totam, mollitia blanditiis." */,
      networkType: req.body.value /* "Instagram" */,
      targetAge:  req.body.targetAge /* "15-25" */,
    },
  });
 
  const inputs = await prisma.content_input.findMany();
}