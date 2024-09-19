import { JwtAdapter } from "../../config/jwt";
import { UserModel } from "../../data/models/user.model";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";

abstract class AuthDatasoruceService {
  abstract register(registerDto: RegisterDto): Promise<any>
  abstract login(loginDto: LoginDto): Promise<any>
}

export class AuthServiceClass implements AuthDatasoruceService {
  async register(registerDto: RegisterDto) {
    const { email, password, username } = registerDto;

    const user = new UserModel({ email, password, username })
    const token = JwtAdapter.generateToken({ email: user.email })
    await user.save()
    return { user: user.toObject(), token }
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = await UserModel.findOne({ email })
    if(!user) throw new Error('Invalid email or password')
    if(!await user.validatePassword(password)) throw new Error('Invalid email or password')

    const token = JwtAdapter.generateToken({ email: user.email })
    const { password: _password, ...userWithoutPassword } = user.toObject()
    return { user: userWithoutPassword, token }
  }
}