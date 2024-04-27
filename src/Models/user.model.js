import { Schema, model } from 'mongooose'
import bcrypt from 'bcrypt'

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        email: true
    },
    password: {
        type: String,
        required: true,
        min: 8
    }
}, { timestamps: true })


userSchema.pre('save',async function ( next ){
    if(!this.isModified('password'))
        return next()

    const hashPassword = await bcrypt.hash(this.password, 12);
    this.password = hashPassword
    next()

})


userSchema.methods.isPasswordCorrect = async function ( password ){
    return await bcrypt.compare( password, this.password )
}

export const User = model('User', userSchema )