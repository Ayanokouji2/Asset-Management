import { Schema, model } from 'mongoose'

const reservedSchema = new Schema(
    {
        userId:{
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        assest_Booked: {
            type: Schema.Types.ObjectId,
            ref: 'Asset'
        },
        duration:{
            type: Number,
            required: true
        }
    }
)

export const Reserved = model('Reserved', reservedSchema)