import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { routes } from './routes';

import { AppError } from './shared/error/AppError';

const server = express();
const port = process.env.port || 3000;

server.use(express.json());

server.get('/', (req, res) => {
  return res.json({ message: 'API Works!'});
});

server.use(routes);

server.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ message: err.message });
  }

  return response.status(500).json({
    status: "error",
    message: `Internal Server Error - ${err.message}`
  });
});




server.listen(port, () => console.log(`Listening on port: ${port}`));