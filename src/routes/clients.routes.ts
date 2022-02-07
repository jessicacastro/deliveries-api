import { Router } from 'express';

import { CreateClientController } from '../modules/clients/useCases/createClient/CreateClientController';
import { AuthenticateClientController } from '../modules/clients/useCases/authenticateClient/AuthenticateClientController';

const clientsRoutes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

clientsRoutes.post('/', createClientController.handle);
clientsRoutes.post('/authenticate', authenticateClientController.handle);


export { clientsRoutes };