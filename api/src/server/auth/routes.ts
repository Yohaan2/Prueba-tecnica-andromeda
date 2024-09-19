import { FastifyInstance } from "fastify"
import { AuthController } from "./auth.controller"
import { AuthServiceClass } from "./auth.service"

export class AuthRoutes {

  public static get routes() {
    return async (fastify: FastifyInstance) => {
      const service = new AuthServiceClass()
      const controller = new AuthController(service)

      fastify.post('/register', controller.register)
      fastify.post('/login', controller.login)

    }
  }
}