import { reserveAsset } from '../Controller/reserved.controller.js'
import { Router } from 'express'

const router = Router()


router
    .route("/reservations/:id")
    .post(reserveAsset)



export default router;