import { NextFunction, Request, Response } from "express";
import  boom  from "@hapi/boom"
import Joi from "joi";

export const validatorHandler = (schema:Joi.Schema, property:string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = (req as any)[property]
    const {error} = schema.validate(data, {abortEarly:false})
    if(error){
      next( boom.badRequest(error))
    }
    next();
  };
};
