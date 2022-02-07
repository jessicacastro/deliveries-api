import { prisma } from '../../../../database/prismaClient';

class FindAllAvailableUseCase {
  async execute() {
    const deliveriesWithoutEndDate = await prisma.deliveries.findMany({
      where: {
        ended_at: null
      }
    })

    return deliveriesWithoutEndDate;
  }
}

export { FindAllAvailableUseCase }