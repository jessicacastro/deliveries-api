import { prisma } from "../../../../database/prismaClient"

class ListDeliveriesClientUseCase {
  async execute(id_client: string) {
    const deliveries = await prisma.clients.findMany({
      where: {
        id: id_client
      },
      select: {
        deliveries: true,
        id: true,
        username: true
      }
      
    })

    return deliveries;
  }
}

export { ListDeliveriesClientUseCase }