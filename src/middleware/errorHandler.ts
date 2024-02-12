import { Boom } from "@hapi/boom"
import { NextFunction, Request, Response} from "express"

export const logError=(err:Error, req:Request, res:Response, next:NextFunction)=>{
  console.log('se guarda error en log de errores... 1')
  console.error(err)
  next(err)
}


export const errorHandler=(err:Error, req:Request, res:Response, next:NextFunction)=>{
  console.log('se envia error a cliente')
  res.status(500).json({
    message:err.message,
    stack:err.stack
  })
}


export const boomErrorHandler=(err:Boom, req:Request, res:Response, next:NextFunction)=>{
  if(err.isBoom){
    const {output} = err
    res.status(output.statusCode).json(output.payload)
  }else{
    next(err)
  }

}
