import { celebrate, Joi, Segments } from 'celebrate';

export const EmployeesCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        EmployeesNumber: Joi.number().required(),
        LastName: Joi.string().required(),
        FirstName: Joi.string().required(),
        phone: Joi.string().required(),
        email: Joi.string().required()
    })
})    
export const CustomersUpdateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        EmployeesNumber: Joi.number(),
        LastName: Joi.string(),
        FirstName: Joi.string(),
        phone: Joi.string(),
        email: Joi.string().required()
    })
})