import { Router } from 'express';
import { AuthenticateDeliverymanController } from '../modules/deliveryman/useCases/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateDeliverymanController } from '../modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';

const deliverymanRoutes = Router();

const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

deliverymanRoutes.post('/', createDeliverymanController.handle);
deliverymanRoutes.post('/authenticate', authenticateDeliverymanController.handle);


export { deliverymanRoutes };