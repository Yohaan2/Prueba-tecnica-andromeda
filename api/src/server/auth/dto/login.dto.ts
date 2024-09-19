export class LoginDto {
  constructor(
    public email: string,
    public password: string
  ){}

  static create(payload:{[key: string]:  any}): [string?, LoginDto?] {
    const { email, password } = payload;
    if(!email) return ['Email is required']
    if(!password) return ['Password is required']
    return [undefined, new LoginDto(email, password)]
  }
}