import fastify from 'fastify';
import { Server } from './server/server';
import { AppRoutes } from './server/routes';
import { MongoDatabase } from './data/databse-mongodb';
import { ENV } from './config/envs';

(async () => await main())();

async function main() {
  await MongoDatabase.connect({
    url: ENV.MONGO_URL,
    dbName: ENV.MONGO_DB_NAME
  })

  const server = new Server(ENV.PORT, AppRoutes.routes)
  await server.start()
}