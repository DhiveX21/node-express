import {
  IUserCheckPayload,
  IUserCreatePayload,
} from "../entities/request.type";
import {
  IGetAllUserData,
  IGetOneUserData,
  IUserCheckData,
} from "../entities/response.type";

export interface IUserServices {
  getAllUserService: () => Promise<IGetAllUserData | null>;
  getOneUserService: (id: number) => Promise<IGetOneUserData | null>;
  createUserService: (payload: IUserCreatePayload) => Promise<any | null>;
  checkUserService: (
    payload: IUserCheckPayload
  ) => Promise<IGetOneUserData | null>;
}
