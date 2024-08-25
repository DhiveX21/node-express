import { IUser } from "./user.type";

export type IBaseService<T> = {
  data: T | null;
  error: any;
};

export type IMetaResponse = {
  message: string;
  status: string;
  code: number;
};

export type IApiResponseSuccess<T> = {
  meta: IMetaResponse;
  data: T;
};

export type IGetAllUserData = IUser[];

export type IGetOneUserData = IUser;

export type IUserLoginData = IUser & {
  token: string;
};

export type IUserCheckData = {
  status: "Not Found" | "User Is Exist";
};
