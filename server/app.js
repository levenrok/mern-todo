import express from 'express'
import cors from 'cors'

import todoRouter from './routes/todo.route.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/todo', todoRouter)

export default app
