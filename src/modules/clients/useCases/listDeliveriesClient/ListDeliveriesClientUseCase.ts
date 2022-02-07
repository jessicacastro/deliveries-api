import { prisma } from "../../../../database/prismaClient"

interface IListDeliveriesClient {
  id_client: string;
}

class ListDeliveriesClientUseCase {
  async execute({ id_client }: IListDeliveriesClient) {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        id_client
      }
    })

    return deliveries;
  }
}

export { ListDeliveriesClientUseCase }