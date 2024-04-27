import { Router } from 'express'
import { Login, Signup } from '../Controller/user.controller.js';

const router = Router()


router
    .route('/login')
    .post(Login)

router
    .route('/signup')
    .post(Signup)



export default router;