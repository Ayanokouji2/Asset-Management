import { Schema, model } from 'mongoose'

const reservedSchema = new Schema(
    {
        userId:{
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        asset_Booked: {
            type: Schema.Types.ObjectId,
            ref: 'Asset'
        },
        duration:{
            type: String,
            required: true
        },
        date:{
            type: Date,
            default: Date.now
        }
    }
)

export const Reserved = model('Reserved', reservedSchema)