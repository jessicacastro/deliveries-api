import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../../database/prismaClient";
import { AppError } from "../../../../shared/error/AppError";

interface IAuthenticateClient {
  username: string;
  password: string;
}

class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClient) {
    const user = await prisma.clients.findFirst(
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
      
    const token = sign({ username }, "3efba3aacd6e0ccef0c7f46724a926bb", { expiresIn: "7d" });
  
    const userResult = {
        token,
        user
    }
  
    return userResult;
  }
}

export { AuthenticateClientUseCase }