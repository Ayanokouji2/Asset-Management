export const Login = async( req, res)=>{
    try {
        const check = await collection.findOne({ username: req.body.username });

        if (check) {    
            if (check.password === req.body.password) {
                res.redirect("https://assetifyy.vercel.app/");
            } else {
                res.render("login", { errorMessage: "Invalid username or  password" });
            }
        } else {
            res.render("login", { errorMessage: "Invalid username or password" });
        }
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