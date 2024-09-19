import { Validators } from "../../../config/validators";

export class RegisterDto {
  constructor(
    public email: string,
    public password: string,
    public username: string
  ) {}

  static create(payload:{[key: string]:  any}): [string?, RegisterDto?] {
    const { email, password, username } = payload;
    if(!email) return ['Email is required']
    if(!Validators.email.test(email)) return ['Invalid email']
    if(!password) return ['Password is required']
    if(password.length < 8) return ['Password must be at least 8 characters']


    return [undefined, new RegisterDto(email, password, username)]
  }
}