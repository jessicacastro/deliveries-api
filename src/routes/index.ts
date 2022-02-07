import { Router } from "express";

import { clientsRoutes } from "./clients.routs";


const routes = Router();

routes.use('/clients', clientsRoutes);

export { routes };