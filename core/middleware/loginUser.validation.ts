import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import BadRequest from "../data/exception/BadRequest";

export const loginUserValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload = req.body;
  const schema = Joi.object({
    phone_number: Joi.string().required(),
    password: Joi.string().required(),
  });
  const { error, value } = schema.validate(payload);

  if (error) {
    throw new BadRequest(String(error));
  }
  next();
};
