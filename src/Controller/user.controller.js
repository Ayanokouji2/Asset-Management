export const Login = async( req, res)=>{
    try {
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const Signup = async ( req, res)=>{
    try {
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}