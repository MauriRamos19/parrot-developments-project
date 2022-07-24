import { Router } from 'express';
import { check } from 'express-validator'
import { AuthController } from './auth.controller';

const router = Router();

router.post('/login', [
    check('email', 'Email is required').not().isEmpty(),
    check('email', 'Email is not valid').isEmail(),
    check('password', 'Password is required').not().isEmpty()
],AuthController.login);

router.post('/register', [
    check('email', 'Email is required').not().isEmpty(),
    check('email', 'Email is not valid').isEmail(),
    check('password', 'Password is required').not().isEmpty(),
    check('confirmPassword', 'Confirm password is required').not().isEmpty(),
    check('confirmPassword', 'Passwords do not match').custom((value, { req }) => value === req.body.password)
],AuthController.register);


export default router;