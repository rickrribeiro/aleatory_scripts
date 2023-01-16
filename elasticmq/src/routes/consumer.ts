import express from 'express'
import { Context } from '../models/context';
const router = express.Router();

interface Req {
    [key: string]: any
}

router.get('/getAll/:queue', async (req: Req,res) => {
    const {context, params} = req;
    return res.json(await context.sqsService.getQueueMessages(params.queue))
});

router.get('/getQueues', async (req: Req,res) => {
    const {context} = req;
    return res.json(await context.sqsService.getQueues())
});

module.exports = router;