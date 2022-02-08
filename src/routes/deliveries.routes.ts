import { Router } from 'express';
import { ensureAuthenticateClient } from '../middlewares/ensureAuthenticateClient';
import { ensureAuthenticateDeliveryman } from '../middlewares/ensureAuthenticateDeliveryman';
import { CreateDeliveryController } from '../modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { FindAllAvailableController } from '../modules/deliveries/useCases/findAllAvailable/FindAllAvailableController';
import { UpdateDeliverymanController } from '../modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController';
import { UpdateEndedAtController } from '../modules/deliveries/useCases/updateEndedAt/UpdateEndedAtController';

const deliveryRoutes = Router();

const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();
const updateEndedAtController = new UpdateEndedAtController();

deliveryRoutes.get('/', ensureAuthenticateDeliveryman , findAllAvailableController.handle);
deliveryRoutes.post('/', ensureAuthenticateClient, createDeliveryController.handle);
deliveryRoutes.put('/update/deliveryman/:id', ensureAuthenticateDeliveryman, updateDeliverymanController.handle);
deliveryRoutes.put('/update/ended_at/:id', ensureAuthenticateDeliveryman, updateEndedAtController.handle);


export { deliveryRoutes };