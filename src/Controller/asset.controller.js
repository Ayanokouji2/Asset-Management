import { Asset } from "../Models/asset.model.js";

export const createAsset = async (req, res) => {
    try {
        const { name, capacity, available_unit, category, description } = req.body;

        if ([name, category, description].some(item => item === undefined || (typeof item === 'string' && item.trim() === '')) || isNaN(capacity) || isNaN(available_unit)) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        const asset = await Asset.create({
            name,
            capacity,
            available_unit,
            category,
            description
        })

        if (!asset) {
            return res.status(500).json({
                success: false,
                message: "Asset not created"
            })
        }

        return res.status(201).json({
            success: true,
            message: "Asset created successfully",
            asset
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error while creating Asset " + error.message
        })
    }
}

export const updateAsset = async (req, res) => {
    try {
        const { name, capacity, available_unit, category } = req.body;

        if ([name, capacity, available_unit, category]
            .every((item) => (item === undefined))) {
            return res.status(400).json({
                success: false,
                message: "Input Some fields to Update"
            })
        }

        const assetId = req.params.id;

        if (!assetId) {
            return res.status(400).json({
                success: false,
                message: "Asset ID is required to delete"
            })
        }

        const assetUpdate = {}

        if (name && name.trim() !== "")
            assetUpdate.name = name
        else if (capacity)
            assetUpdate.capacity = capacity
        else if (available_unit)
            assetUpdate.available_unit = available_unit
        else if (category)
            assetUpdate.category = category

        const asset = await Asset.findByIdAndUpdate(assetId, assetUpdate, { new: true })

        if (!asset) {
            return res.status(500).json({
                success: false,
                message: "Asset not updated"
            })
        }

        return res.status(201).json({
            success: true,
            message: "Asset updated successfully",
            asset
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const getAllAsset = async (req, res) => {
    try {
        const asset = await Asset.find()

        if (!asset) {
            return res.status(500).json({
                success: false,
                message: "Asset not found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Asset found successfully",
            asset
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const deleteAsset = async (req, res) => {
    try {
        const assetId = req.params.id;

        if (!assetId) {
            return res.status(400).json({
                success: false,
                message: "Asset ID is required to delete"
            })
        }

        const deletedAsset = await Asset.findByIdAndDelete(assetId, { new: true })

        if (!deletedAsset) {
            return res.status(500).json({
                success: false,
                message: "Asset not deleted"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Asset deleted successfully",
            deletedAsset
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const getAssetById = async (req, res) => {
    try {
        const assetId = req.params.id;

        if (!assetId) {
            return res.status(400).json({
                success: false,
                message: "Asset ID is required to get"
            })
        }

        const asset = await Asset.findById(assetId)

        if (!asset) {
            return res.status(500).json({
                success: false,
                message: "Asset not found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Asset found successfully",
            asset
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

