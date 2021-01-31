import express from 'express'
import router from './routes/index'
import bodyParser from 'body-parser'

const app = express()

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(bodyParser.json())
app.use('/api', router)

export default app
