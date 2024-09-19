import fastify, { FastifyInstance } from "fastify";
import fastifyCookie from '@fastify/cookie';
import cors from '@fastify/cors'


type FastifyInstanceFunction = (fastify: FastifyInstance) => void

export class Server {
  public app: FastifyInstance = fastify();
  private port: number
  private routes: FastifyInstanceFunction

  constructor(
    port: number = 3000,
    routes: FastifyInstanceFunction
  ){

    this.port = port;
    this.routes = routes;
  }

  async start() {
    this.routes(this.app);
    this.app.register(cors, {
      origin: '*',
      credentials: true
    })
    this.app.register(fastifyCookie, {
      secret: 'my-secret-key',
    })

    this.app.listen({ port: this.port, host: '0.0.0.0' }, (err, address) => {
      if(err){
        console.log(err)
        process.exit(1)
      }

      console.log(`Server running on port ${this.port}`);
    });
  }
}