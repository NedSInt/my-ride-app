import Fastify from 'fastify';
import cors from '@fastify/cors';
import { motoristasRoutes } from './routes/motoristas';

const app = Fastify();

app.register(cors, { origin: '*' });
app.register(motoristasRoutes);

app.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
  console.log('🚀 Servidor rodando em http://localhost:3333');
});
