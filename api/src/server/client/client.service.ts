import { ClientModel } from "../../data/models/client.model";
import { RegisterClientDto } from "./dto/registerClient.dt";

export class ClientServiceClass {
  async registerClient(registerClientDto: RegisterClientDto) {
    const { name, lastName, phone } = registerClientDto;
    const client = new ClientModel({
      name,
      lastName,
      phone
    })
    await client.save()
    return { message: '¡Gracias por participar!' }
  }
}