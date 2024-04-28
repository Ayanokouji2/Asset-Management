import { Reserved } from '../Models/reserved.model.js'

export const reserveAsset = async (req, res) => {
    try {
        
        const { duration, date, userId } = req.body
        const asset_id = req.params.id
        const userID =  userId
        
        const reserved = await Reserved.create({
            userId: userID,
            asset_Booked: asset_id,
            duration,
            date
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