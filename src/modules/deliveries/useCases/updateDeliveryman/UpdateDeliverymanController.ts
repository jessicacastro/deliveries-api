import { Request, Response } from "express"
import { UpdateDeliverymanUseCase } from "./UpdateDeliverymanUseCase"

class UpdateDeliverymanController {
  async handle(request: Request, response: Response) {
    const updateDeliverymanUseCase = new UpdateDeliverymanUseCase();

    const { id: id_delivery } = request.params;
    const { id_deliveryman } = request;

    const updatedDelivery = await updateDeliverymanUseCase.execute({ id_deliveryman, id_delivery });

    return response.json(updatedDelivery);
  }
}

export { UpdateDeliverymanController }