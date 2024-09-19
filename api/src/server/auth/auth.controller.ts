import { FastifyReply, FastifyRequest } from "fastify"
import { RegisterDto } from "./dto/register.dto"
import { AuthServiceClass } from "./auth.service"
import { LoginDto } from "./dto/login.dto"

export class AuthController {
  constructor(
    public authService: AuthServiceClass
  ) {}

  register = async (request: FastifyRequest, reply: FastifyReply) =>  {
    const [error, registerDto] = RegisterDto.create(request.body!)
    if(error) return reply.status(400).send({ message: error })

      try {
        const {user, token} = await this.authService.register(registerDto!)
    
        reply.setCookie('accessToken', token, {
          path: '/',
          secure: false,
          httpOnly: false,
        })
        reply.statusCode = 201
        return reply.send({ message: 'Registered successfully', user, accessToken: token })
      
      } catch (error) {
        reply.statusCode = 500
        return reply.send({ message: (error as Error).message })
      }
  }

  login = async (request: FastifyRequest, reply: FastifyReply) => {
    const [error, loginDto] = LoginDto.create(request.body!)
    if(error) return reply.status(400).send({ message: error })

      try {
        const {user, token} = await this.authService.login(loginDto!)
        if(!user) return reply.status(401).send({ message: 'Invalid email or password' })
    
        reply.setCookie('accessToken', token, {
          secure: false,
          httpOnly: true,
        })
        reply.statusCode = 200
        return reply.send({ message: 'Login successfully', user, accessToken: token })
        
      } catch (error) {
        reply.statusCode = 500
        return reply.send({ message: (error as Error).message })
      }

  }
}