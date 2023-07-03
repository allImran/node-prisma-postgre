import express from 'express'
import router from './router'
import morgan from 'morgan'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

const custom = (message) => (req, res, next) => {
    console.log(`Hello form ${message}`)
    next()
}


app.use(custom('custom'))

// app.get('/', (req, res) => {
//     console.log('Hello from express')
//     res.status(200)
//     res.json({ message: 'Hello from express' })
// })


app.use('/api', router)

export default app