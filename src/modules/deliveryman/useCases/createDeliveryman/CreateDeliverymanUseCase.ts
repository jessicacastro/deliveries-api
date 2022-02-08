import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../shared/error/AppError";


interface ICreateDeliveryman {
  username: string;
  password: string;
}

class CreateDeliverymanUseCase {
  async execute({ username, password }: ICreateDeliveryman) {
    const deliverymanExists = await prisma.deliveryman.findFirst(
      { 
        where: { 
          username: {
            equals: username,
            mode: "insensitive"
          }
        }
      }
    );

    if (deliverymanExists) {
      throw new AppError('Deliveryman already exists.', );
    }

    const hashPassword = await hash(password, 10);

    const deliveryman = await prisma.deliveryman.create({
      data: {
        username,
        password: hashPassword
      }
    });


    return deliveryman;
  }
}

export { CreateDeliverymanUseCase };
