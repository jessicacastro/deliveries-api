import { Router } from 'express';
import { ensureAuthenticateClient } from '../middlewares/ensureAuthenticateClient';
import { ensureAuthenticateDeliveryman } from '../middlewares/ensureAuthenticateDeliveryman';
import { CreateDeliveryController } from '../modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { FindAllAvailableController } from '../modules/deliveries/useCases/findAllAvailable/FindAllAvailableController';

const deliveryRoutes = Router();

const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();

deliveryRoutes.get('/', ensureAuthenticateDeliveryman , findAllAvailableController.handle);
deliveryRoutes.post('/', ensureAuthenticateClient, createDeliveryController.handle);


export { deliveryRoutes };