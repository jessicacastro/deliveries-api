import { Router } from "express";

import { clientsRoutes } from "./clients.routes";
import { deliveryRoutes } from "./deliveries.routes";
import { deliverymanRoutes } from "./deliveryman.routes";


const routes = Router();

routes.use('/clients', clientsRoutes);
routes.use('/deliveryman', deliverymanRoutes)
routes.use('/delivery', deliveryRoutes);

export { routes };