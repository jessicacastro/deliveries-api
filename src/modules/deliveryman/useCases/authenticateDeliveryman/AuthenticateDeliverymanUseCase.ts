import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../shared/error/AppError";

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliveryman) {
    const user = await prisma.deliveryman.findFirst(
      { 
        where: { 
          username: {
            mode: "insensitive"
          }
        }
      }
    );
  
    if (!user) throw new AppError('Username or password incorrect.');
  
    const passwordMatch = await compare(password, user.password);
  
    if (!passwordMatch) throw new AppError('Username or password incorrect.');
      
    const token = sign({ username }, "3efba3aacd6e0ccef0c7f46724a926cc", { expiresIn: "7d" });
    const { id } = user;
  
    const userResult = {
        token,
        user: {
          id,
          username
        }
    }
  
    return userResult;
  }
}

export { AuthenticateDeliverymanUseCase }