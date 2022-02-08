import { Request, Response } from "express";
import { ListDeliveriesDeliverymanUseCase } from "./ListDeliveriesDeliverymanUseCase";

class ListDeliveriesDeliverymanController {
  async handle(request: Request, response: Response) {
    const listDeliveriesDeliverymanUseCase = new ListDeliveriesDeliverymanUseCase();

    const { id_deliveryman } = request;

    const deliveries = await listDeliveriesDeliverymanUseCase.execute(id_deliveryman);

    return response.json(deliveries);
  }
}

export { ListDeliveriesDeliverymanController }