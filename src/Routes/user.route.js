import { Router } from 'express'
import { Login, Signup, getUser } from '../Controller/user.controller.js';

const router = Router()


router
    .route('/login')
    .post(Login)

router
    .route('/signup')
    .post(Signup)

router
    .route("/get-user")
    .get(getUser)


export default router;