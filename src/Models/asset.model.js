import { Schema, model } from 'mongoose';

const assetSchema = new Schema(
    {
        name:{
            type: String,
            required: true
        },
        capacity:{
            type: Number,
            required: true
        },
        available_unit:{
            type: Number,
            default: true
        },
        category:{
            type: String,
            required: true
        }
    },{
        timestamps: true
    }
)

export const Asset = model('Asset', assetSchema)
