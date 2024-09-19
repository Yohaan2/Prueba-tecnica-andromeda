import { FastifyReply, FastifyRequest } from "fastify";
import { StatisticsServiceClass } from "./ststistics.service";

export class StatisticsController {
  constructor(
    private statisticsService: StatisticsServiceClass
  ) {}

  getStatistics = async (request: FastifyRequest, reply: FastifyReply) => {
    const data = this.statisticsService.getStatistics()
    return reply.send({ message: 'Statistics', statistics: data })
  }
}