import { Router } from 'express'
import { createAsset, deleteAsset, getAllAsset, getAssetById, getAssetByName, updateAsset } from '../Controller/asset.controller.js';

const router = Router()

router
    .route("/create-asset")
    .post(createAsset)

router
    .route("/update-asset")
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

    router
    .route("/get-asset-name/:name")
    .get(getAssetByName)



export default router;