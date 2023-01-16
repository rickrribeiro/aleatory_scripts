import express from 'express'
const router = express.Router();

interface Req {
    [key: string]: any
}

router.post('/createMessage/:queue', async (req: Req,res) => {
    const {context, body, params} = req;
    //context.dbs.setMessage(body.message)
    const response = await context.sqsService.postMessageToQueue(params.queue, body.message)
    return res.status(200).json(response)
});


module.exports = router;