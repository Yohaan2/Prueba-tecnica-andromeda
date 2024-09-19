import { FastifyReply, FastifyRequest } from "fastify";
import { JwtAdapter } from "../../config/jwt";

export class AuthMiddleware {
  static async verifyToken(request: FastifyRequest, reply: FastifyReply) {

    const token = request.headers.authorization?.split(' ')[1]
    if(!token) return reply.status(401).send({ message: 'Unauthorized' })
    try {
      const payload = await JwtAdapter.verifyToken<{email:string}>(token)
      if(!payload) return reply.status(401).send({ message: 'Unauthorized' })
      
      request.user = payload

    } catch (error) {
      reply.statusCode = 500
      return reply.send({ message: (error as Error).message })
    }
  }
}