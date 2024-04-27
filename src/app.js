import express from 'express'
import cors from 'cors'
import AssetRouter from './Routes/asset.route.js'
import UserRouter from './Routes/user.route.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/v1/asset', AssetRouter)
app.use('/api/v1/user', UserRouter)

export { app }
