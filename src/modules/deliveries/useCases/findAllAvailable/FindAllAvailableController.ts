import { Request, Response } from "express";
import { FindAllAvailableUseCase } from "./FindAllAvailableUseCase";

class FindAllAvailableController {
  async handle(request: Request, response: Response) {
    const findAllWihoutEndDateUseCase = new FindAllAvailableUseCase();

    const deliveries = await findAllWihoutEndDateUseCase.execute();

    return response.json(deliveries);
  }
}

export { FindAllAvailableController }