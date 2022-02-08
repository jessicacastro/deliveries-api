import { prisma } from "../../../../database/prismaClient";

interface IUpdateEndedAt {
  id_delivery: string;
  id_deliveryman: string;
}

class UpdateEndedAtUseCase {
  async execute({ id_delivery, id_deliveryman }: IUpdateEndedAt) {
    const result = await prisma.deliveries.updateMany({
      where: {
        id: id_delivery,
        id_deliveryman
      },
      data: {
        ended_at: new Date()
      }
    })

    return result;
  }
}

export { UpdateEndedAtUseCase }