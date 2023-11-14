import db from '@/lib/db'
import { authOptions } from '../../auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'



export const POST = async (req, res) => {
  const session = await getServerSession(authOptions)

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { prompt, value, targetAge } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Missing required parameter: prompt.' });
  }

  const userId = session.user.id;

  const newInput = await db.content_input.create({
    data: {
      userId: userId,
      content: prompt,
      networkType: value,
      targetAge: targetAge,
    }
  });
  console.log(newInput)
  return newInput;

}