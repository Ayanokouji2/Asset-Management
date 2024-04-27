import { Router } from 'express'
import { createAsset, deleteAsset, getAllAsset, getAssetById, updateAsset } from '../Controller/asset.controller.js';

const router = Router()

router
    .route("/create-asset")
    .post(createAsset)

router
    .route("/update-asset/:id")
    .patch(updateAsset)

router
    .route("/delete-asset/:id")
    .delete(deleteAsset)

router
    .route("/get-all-assets")
    .get(getAllAsset)

router
    .route("/get-asset/:id")
    .get(getAssetById)



export default router;