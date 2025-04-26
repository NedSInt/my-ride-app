import { FastifyInstance } from 'fastify';

interface Motorista {
  name: string;
  email: string;
  matricula: string;
  password: string;
}

export async function motoristasRoutes(app: FastifyInstance) {
  app.post('/motoristas', async (request, reply) => {
    const { name, email, matricula, password } = request.body as Motorista;

    // Simulação de persistência (aqui você pode salvar no banco futuramente)
    console.log('Motorista cadastrado:', { name, email, matricula });

    // Aqui você poderia salvar em um banco ou validar dados
    return reply.status(201).send({ message: 'Motorista cadastrado com sucesso.' });
  });
}
