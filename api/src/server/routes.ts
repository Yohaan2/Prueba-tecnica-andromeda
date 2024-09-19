import { FastifyInstance } from "fastify";
import { AuthRoutes } from "./auth/routes";
import { StatisticsRoutes } from "./statistics/routes";
import { ClientRoutes } from "./client/routes";

export class AppRoutes {
  static get routes() {
    return async (fastify: FastifyInstance) => {
      fastify.register(AuthRoutes.routes, { prefix: '/auth'})
      fastify.register(StatisticsRoutes.routes, { prefix: '/statistics'})
      fastify.register(ClientRoutes.routes, { prefix: '/client'})
    }
  }
}