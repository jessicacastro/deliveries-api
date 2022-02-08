import { Request, Response } from "express";
import { UpdateEndedAtUseCase } from "./UpdateEndedAtUseCase";

class UpdateEndedAtController {
  async handle(request: Request, response: Response) {
    const updateEndedAtUseCase = new UpdateEndedAtUseCase();

    const { id: id_delivery } = request.params;
    const { id_deliveryman } = request;

    const delivery = await updateEndedAtUseCase.execute({ id_delivery, id_deliveryman });

    return response.json(delivery);
  }
}

export { UpdateEndedAtController }