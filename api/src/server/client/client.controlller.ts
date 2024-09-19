import { FastifyReply, FastifyRequest } from "fastify";
import { RegisterClientDto } from "./dto/registerClient.dt";
import { ClientServiceClass } from "./client.service";

export class ClientController {
  constructor(public service: ClientServiceClass) {}

  registerClient = async (request: FastifyRequest, reply: FastifyReply) => {
    const [error, registerClientDto] = RegisterClientDto.create(request.body!)
    if(error) return reply.status(400).send({ message: error })

      try {
        const client = await this.service.registerClient(registerClientDto!)
        reply.statusCode = 201
        return reply.send({ message: client.message })
      } catch (error) {
        reply.statusCode = 500
        return reply.send({ message: (error as Error).message })
      }
  }
}