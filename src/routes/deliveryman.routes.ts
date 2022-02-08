import { Router } from 'express';
import { ensureAuthenticateDeliveryman } from '../middlewares/ensureAuthenticateDeliveryman';
import { AuthenticateDeliverymanController } from '../modules/deliveryman/useCases/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateDeliverymanController } from '../modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { ListDeliveriesDeliverymanController } from '../modules/deliveryman/useCases/listDeliveriesDeliveryman/ListDeliveriesDeliverymanController';

const deliverymanRoutes = Router();

const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const listDeliveriesDeliverymanController = new ListDeliveriesDeliverymanController();

deliverymanRoutes.post('/', createDeliverymanController.handle);
deliverymanRoutes.post('/authenticate', authenticateDeliverymanController.handle);
deliverymanRoutes.get('/deliveries',ensureAuthenticateDeliveryman, listDeliveriesDeliverymanController.handle)


export { deliverymanRoutes };