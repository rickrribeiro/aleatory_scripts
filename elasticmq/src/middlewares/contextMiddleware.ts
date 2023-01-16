import { NextFunction, Request, Response } from 'express';
import {Context} from '../models/context'

interface Req {
    [key: string]: any
}

const setContextToReq = (context:Context) => {
    return (req: Req, resp: Response, next: NextFunction) => {
      req.context = context;
      next();
    }
  }
export{
    setContextToReq
}