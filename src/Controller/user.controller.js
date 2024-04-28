import { User } from '../Models/user.model.js'

export const Login = async( req, res)=>{
    try {
        const { username, password } = req.body;

        if(!username ||  !password){
            return res.status(400).json({
                success: false,
                message: 'Please provide username and password'
            })
        }

        const user  = await User.findOne({username})

        if(!user){
            return res.status(401).json({
                success: false,
                message: 'No user Found'
            })
        }

        if(! await user.isPasswordCorrect(password)){
            return res.status(401).json({
                success: false,
                message: 'Invalid Credentials'
            })
        }

        req.user = user

        res.cookie("userId",user._id,{httpOnly:false,secure:true})
        res.status(200).json({
            success: true,
            message: 'Login Successful',
        })


    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const Signup = async ( req, res)=>{
    try {
        const { username, email, password } = req.body;

        if(!username || !email || !password){
            return res.status(400).json({
                success: false,
                message: 'Please provide all the required fields'
            })
        }

        const user = await User.create({
            username,
            email,
            password
        })

        res.status(201).json({
            success: true,
            message: 'User Created Successfully',
            user
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const getUser = async (req, res)=>{
    try {
        const { username } = req.params
        const user = await User.findOne({username})

        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}