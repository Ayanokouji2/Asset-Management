import { Schema, model } from 'mongoose'

const feedbackSchema = new Schema(
    {
        userId:{
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        comment: {
            type: String,
            required: true
        },
        rating:{
            type: Number,
            required: true
        },
        date:{
            type: Date,
            default: Date.now()
        },
        asset_Id:{
            type: Schema.Types.ObjectId,
            ref: 'Asset'
        }
    },{ timestamps: true }
)

export const Feedback = model('Feedback', feedbackSchema)