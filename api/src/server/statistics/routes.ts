import { FastifyInstance } from "fastify";
import { StatisticsController } from "./statistics.controller";
import { StatisticsServiceClass } from "./ststistics.service";
import { AuthMiddleware } from "../middleware/auth.middleware";

export class StatisticsRoutes {
  static get routes() {
    return async (fastify: FastifyInstance) => {
      const service = new StatisticsServiceClass()
      const controller = new StatisticsController(service)

      fastify.get('/',{ preHandler: AuthMiddleware.verifyToken}, controller.getStatistics)
    }
  }
}