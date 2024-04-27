import mongoose from 'mongoose'
import { DB_NAME } from '../constant.js'

const connectDB = async () => {
    new Promise((resolve, reject) => {
        try {
            mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`).then((databse)=>{
                console.log("Database Connected")
                resolve()
            })
        } catch (error) {
            console.log("Error While connecting database ", error.message)
            reject()
            process.exit(1)
        }
    })

}

export { connectDB }

