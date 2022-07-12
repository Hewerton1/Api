import express, { Router } from 'Express';
import * as controller from '../controller/EmployeesController';
import { EmployeesCreateValidation, EmployeesUpdateValidation} from '../validations/EmployeesValidation';

const router = Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', EmployeesCreateValidation, controller.create);
router.put('/:id', EmployeesUpdateValidation,controller.updateById);
router.delete('/:id', controller.deleteById);

export default router; 
