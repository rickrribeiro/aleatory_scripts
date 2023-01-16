import { Dbs} from './dbs'
import {Config} from '../config'
import { SqsService } from '../services/sqs-service';
class Message{
    public config: Object;
    public dbs: Dbs;
    public sqsService: SqsService;

    constructor(config: Object, sqsService: SqsService){
        this.config = config;
        this.dbs = new Dbs();
        this.sqsService = sqsService;
    }
}

export{
    Message
}