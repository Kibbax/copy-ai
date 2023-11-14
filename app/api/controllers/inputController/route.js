// /api/controllers/inputController.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      await handlePost(req, res);
    } else {
      res.status(405).end(); // Método no permitido para otras solicitudes
    }
  }
  
  async function handlePost(req, res) {
    try {
      const session = await getServerSession(authOptions);
  
      if (!session) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
  
      const { prompt, value, targetAge } = req.body;
  
      // Verifica que los datos necesarios estén presentes en la solicitud
      if (!prompt) {
        return res.status(400).json({ error: 'Missing required parameter: prompt.' });
      }
  
      // Obtiene el userId del contexto de autenticación
      const userId = session.user.id;
  
      // Lógica para guardar en la base de datos o cualquier otra acción necesaria
      const newInput = await db.content_input.create({
        data: {
          userId: userId,
          content: prompt,
          // Trata con valores opcionales (asegúrate de tener "value" y "targetAge" definidos)
          networkType: value || null,
          targetAge: targetAge || null,
        },
      });
  
      // Devuelve una respuesta al cliente indicando que la operación fue exitosa
      return res.status(201).json({ message: 'Input created successfully.', data: newInput });
    } catch (error) {
      console.error('Error handling POST request:', error);
      return res.status(500).json({ error: 'Internal server error.', detailedError: error.message });
    }
  }
  