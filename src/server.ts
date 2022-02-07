import express, { NextFunction, Request, Response } from 'express';
import { routes } from './routes';

import { AppError } from './shared/error/AppError';

const server = express();

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


server.listen(3000, () => console.log('Server running at http://localhost:3000'));