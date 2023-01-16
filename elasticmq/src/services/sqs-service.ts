import AWS from 'aws-sdk'

interface Config{
    aws: any
}

class SqsService{
    private config: any;
    private connection: AWS.SQS

    
    constructor(config: Config){
        this.config = config;
        this.connection = new AWS.SQS(config.aws);
    }

    async postMessageToQueue(queue:string, message:string){

        return await this.connection.sendMessage({
            MessageBody: JSON.stringify(message),
            QueueUrl: this.config[queue].url,
            // MessageGroupId: this.config[queue].group
            }).promise();
    }

    async getQueueMessages(queue:string) {
        return await this.connection.receiveMessage ({
            QueueUrl: this.config[queue].url,
            }).promise();
    }

    async getQueues(){
        const queues = await this.connection.listQueues().promise();
        console.log(queues);
        return queues;
    }

}

export{
    SqsService
}