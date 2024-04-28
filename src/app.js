import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import AssetRouter from './Routes/asset.route.js'
import UserRouter from './Routes/user.route.js'
import ResrvationRouter from './Routes/reserved.route.js'

const app = express()

app.use(cors({
    origin:true,
    credentials:true
}))
app.use(cookieParser())
app.use(express.json())

app.use('/api/v1', ResrvationRouter)
app.use('/api/v1/asset', AssetRouter)
app.use('/api/v1/user', UserRouter)

export { app }
