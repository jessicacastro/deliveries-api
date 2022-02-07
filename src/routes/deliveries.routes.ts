import { Router } from 'express';
import { ensureAuthenticateClient } from '../middlewares/ensureAuthenticateClient';
import { ensureAuthenticateDeliveryman } from '../middlewares/ensureAuthenticateDeliveryman';
import { CreateDeliveryController } from '../modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { FindAllAvailableController } from '../modules/deliveries/useCases/findAllAvailable/FindAllAvailableController';
import { UpdateDeliverymanController } from '../modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController';

const deliveryRoutes = Router();

const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController()

deliveryRoutes.get('/', ensureAuthenticateDeliveryman , findAllAvailableController.handle);
deliveryRoutes.post('/', ensureAuthenticateClient, createDeliveryController.handle);
deliveryRoutes.put('/update/deliveryman/:id', ensureAuthenticateDeliveryman, updateDeliverymanController.handle)


export { deliveryRoutes };