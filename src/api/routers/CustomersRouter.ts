import express, { Router } from 'Express';
import * as controller from '../controller/CustomersController';
import { CustomerCreateValidation, CustomersUpdateValidation} from '../validations/CustomersValidation';

const router = Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', CustomerCreateValidation, controller.create);
router.put('/:id', controller.updateById);
router.delete('/:id', controller.deleteById);

export default router; 
