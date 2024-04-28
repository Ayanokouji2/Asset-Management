import { Schema, model } from 'mongoose';

const assetSchema = new Schema(
    {
        name:{
            type: String,
            required: true,
            unique: true
        },
        capacity:{
            type: Number,
            required: true
        },
        isAvailable:{
            type: Boolean,
            default: true
        },
        category:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        }
    },{
        timestamps: true
    }
)

export const Asset = model('Asset', assetSchema)
