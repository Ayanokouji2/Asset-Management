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

        const user  = await User.findOne(username)

        if(!user){
            return res.status(401).json({
                success: false,
                message: 'No user Found'
            })
        }

        if(!user.isPasswordCorrect(password)){
            return res.status(401).json({
                success: false,
                message: 'Invalid Credentials'
            })
        }

        req.user = user

        res.status(200).json({
            success: true,
            message: 'Login Successful',
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const Signup = async ( req, res)=>{
    try {
        const data = {
            username: req.body.username,
            password: req.body.password
        };
        await collection.insertMany([data]);
    
        res.render("login", { errorMessage: undefined });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}