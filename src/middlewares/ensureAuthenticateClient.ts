import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../shared/error/AppError";

interface IPayload {
  sub: string;
}

const ensureAuthenticateClient = (request: Request, response: Response, next: NextFunction) => {
  const authToken = request.headers.authorization;

  if (!authToken) {
    throw new AppError('Token is missing', 401)
  }

  const [_, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, "3efba3aacd6e0ccef0c7f46724a926bb") as IPayload;

    request.id_client = sub;
    return next();
  } catch (error) {
    return response.status(401).json({ message: 'Invalid token!'});
  }
}

export { ensureAuthenticateClient }