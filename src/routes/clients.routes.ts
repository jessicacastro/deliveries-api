import { Router } from 'express';

import { CreateClientController } from '../modules/clients/useCases/createClient/CreateClientController';
import { AuthenticateClientController } from '../modules/clients/useCases/authenticateClient/AuthenticateClientController';
import { ListDeliveriesClientController } from '../modules/clients/useCases/listDeliveriesClient/ListDeliveriesClientController';

const clientsRoutes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const listDeliveriesClientController = new ListDeliveriesClientController();

clientsRoutes.post('/', createClientController.handle);
clientsRoutes.post('/authenticate', authenticateClientController.handle);
clientsRoutes.get('/deliveries', listDeliveriesClientController.handle)


export { clientsRoutes };