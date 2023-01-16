import { Config } from './config'
import { Context } from './models/context'
import { SqsService } from './services/sqs-service'
import express from 'express'
import cors from 'cors'
import {consumer, producer} from './routes'
import {setContextToReq} from './middlewares/contextMiddleware'
const app = express()
app.use(express.json())
app.use(cors())
const sqsService = new SqsService(Config)
const context = new Context(Config, sqsService);

app.use('/consumer',setContextToReq(context), consumer)
app.use('/producer',setContextToReq(context), producer)

app.listen(3000, () => {
    console.log("O app ta na porta 3000")
})