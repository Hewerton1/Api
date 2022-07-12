import express, { Router } from 'Express';
import * as controller from '../controller/OfficesController';
import { OfficesCreateValidation, OfficesUpdateValidation} from '../validations/OfficesValidation';

const router = Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', OfficesCreateValidation, controller.create);
router.put('/:id', OfficesUpdateValidation.updateById);
router.delete('/:id', controller.deleteById);

export default router; 
