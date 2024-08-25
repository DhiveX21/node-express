import {
  IUserCheckPayload,
  IUserCreatePayload,
  IUserLoginPayload,
} from "../entities/request.type";
import {
  IGetAllUserData,
  IGetOneUserData,
  IUserCheckData,
} from "../entities/response.type";

export type IUserRepository = {
  getAllUserRepository: () => Promise<IGetAllUserData | null>;
  getOneUserRepository: (id: number) => Promise<IGetOneUserData | null>;
  createUserRepository: (
    payload: IUserCreatePayload
  ) => Promise<IGetOneUserData | null>;
  // loginUserRepository: (payload: IUserLoginPayload) => Promise<any | null>;
  checkUserRepository: (
    payload: IUserCheckPayload
  ) => Promise<IGetOneUserData | null>;
};
