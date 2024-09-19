export class RegisterClientDto {
  constructor(
    public name: string,
    public lastName: string,
    public phone: string
  ) {}

  static create(payload:{[key: string]:  any}): [string?, RegisterClientDto?] {
    const { name, lastName, phone } = payload;
    if(!name) return ['Name is required']
    if(!lastName) return ['Last name is required']
    if(!phone) return ['Phone is required']

    return [undefined, new RegisterClientDto(name, lastName, phone)]
  }
}