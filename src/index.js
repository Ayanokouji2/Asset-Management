import { connectDB } from './db/connect.js'
import 'dotenv/config'
import { app } from './app.js'


const PORT = process.env.PORT || 8000
connectDB()
    .then(()=>{
        app.on('error',(err)=>{
            console.log(`app is unable to communicate with the server ${err.message}`)
            throw new err
        })

        app.listen(PORT,()=>{
            console.log(`Server is listening in the port : ${PORT}`)
        })
    })
    .catch((err)=>{
        console.log(`Error while creating server ${err.message}`)
        throw err
    })
