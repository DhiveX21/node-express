import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import BadRequest from "../data/exception/BadRequest";

export const createUserValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload = req.body;
  const schema = Joi.object({
    gender: Joi.any().allow("male", "female").required(),
    phone_number: Joi.string().required(),
    name: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "id"] },
      })
      .required(),
    password: Joi.string().required(),
  });
  const { error, value } = schema.validate(payload);

  if (error) {
    throw new BadRequest(String(error));
  }
  next();
};
