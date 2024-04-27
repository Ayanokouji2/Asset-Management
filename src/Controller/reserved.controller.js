import { Reserved } from '../Models/reserved.model.js'

export const reserveAsset = async (req, res) => {
    try {
        const userId = req.user._id

        const { asset_Id, duration } = req.body

        const reserved = await Reserved.create({
            userId,
            asset_Booked: asset_Id,
            duration
        })

        if(!reserved){
            return res.status(400).json({
                success: false,
                message: 'Could not reserve asset'
            })
        }

        res.status(201).json({
            success: true,
            message: 'Asset reserved successfully',
            data: reserved
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message: error.message
        })
    }
}