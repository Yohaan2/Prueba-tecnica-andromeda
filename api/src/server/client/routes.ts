import { FastifyInstance } from "fastify";
import { ClientController } from "./client.controlller";
import { ClientServiceClass } from "./client.service";
import { AuthMiddleware } from "../middleware/auth.middleware";

export class ClientRoutes {
  public static get routes() {
    return async function(fastify:FastifyInstance){
      const service = new ClientServiceClass()
      const controller = new ClientController(service)
      fastify.post('/register-client',{ preHandler: AuthMiddleware.verifyToken}, controller.registerClient)
    }
  }
}