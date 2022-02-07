import { Request, Response } from "express";
import { ListDeliveriesClientUseCase } from "./ListDeliveriesClientUseCase";

class ListDeliveriesClientController {
  async handle(request: Request, response: Response) {
    const listDeliveriesClientUseCase = new ListDeliveriesClientUseCase();

    const { id_client } = request;

    const deliveries = await listDeliveriesClientUseCase.execute({ id_client });

    return response.json(deliveries);
  }
}

export { ListDeliveriesClientController }