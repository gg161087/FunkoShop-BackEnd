import { body, validationResult } from 'express-validator';

import { message } from '../utils/errorHandlers.js';

export const loginValidations = [
    body('email')
        .isEmail()
        .withMessage('Ingrese un correo válido.'),
    body('password')
        .isLength({min: 6})        
        .withMessage('La contraseña debe tener al menos 6 caracteres.')
];

export const validateInput = (req, res, next) => {

    const result = validationResult(req);

    const {errors} = result

    if (!result.isEmpty()) {                   
        return message(res, 400, 'Bad request | Funkoshop', 'Error 400', errors[0].msg, '/admin/login', 'VOLVER');   
    };
    
    next();

}