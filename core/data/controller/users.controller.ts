import { Request, NextFunction, Response } from "express";
import UserService from "../service/users.service";
import { UserRepository } from "../repository/users.repository";
import {
  IGetOneUserParams,
  IUserCheckPayload,
  IUserCreatePayload,
  IUserLoginPayload,
} from "../../domain/entities/request.type";
import { baseResponseSuccess } from "../../../responses/baseResponse";
import jwt from "jsonwebtoken";
import "dotenv/config";

const userRepo = new UserRepository();
const service = new UserService(userRepo);

export const userController = {
  async getAllHandler(req: Request, res: Response, next: NextFunction) {
    try {
      const getAllData = await service.getAllUserService();

      const response = baseResponseSuccess({
        code: 200,
        data: getAllData,
        message: "Success Get User",
        status: "success",
      });

      return res.status(200).json(response);
    } catch (error: any) {
      next(error);
    }
  },

  async getOneHandler(
    req: Request<IGetOneUserParams>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const getOneData = await service.getOneUserService(+req.params.id);

      const response = baseResponseSuccess({
        code: 200,
        status: "success",
        message: "Success Get User",
        data: getOneData,
      });

      return res.status(200).json(response);
    } catch (error: any) {
      next(error);
    }
  },

  async createHandler(
    req: Request<IUserCreatePayload>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const createUserData = await service.createUserService(req.body);

      const response = baseResponseSuccess({
        code: 200,
        status: "success",
        message: "Success Create User",
        data: createUserData,
      });

      return res.status(200).json(response);
    } catch (error: any) {
      next(error);
    }
  },

  async checkUserHandler(
    req: Request<IUserCheckPayload>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const checkUserData = await service.checkUserService(req.body);

      const response = baseResponseSuccess({
        code: 200,
        status: "success",
        message: "Success Check User",
        data: checkUserData,
      });

      return res.status(200).json(response);
    } catch (error: any) {
      next(error);
    }
  },
  async loginUserHandler(
    req: Request<IUserLoginPayload>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const loginUserData = await service.loginUserService({ ...req.body });

      const response = baseResponseSuccess({
        code: 200,
        status: "success",
        message: "Success Login",
        data: {
          token: jwt.sign(loginUserData, process.env.ACCESS_TOKEN_KEY!),
        },
      });

      return res.status(200).json(response);
    } catch (error: any) {
      next(error);
    }
  },
};
