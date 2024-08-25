import { IUser } from "./user.type";

export type IUserCreatePayload = {
  name: string;
  email: string;
  gender: string;
  phone_number: string;
  password: string;
};

export type IGetOneUserParams = {
  id: number;
};

export type IUserLoginPayload = Pick<IUser, "phone_number" | "password">;

export type IUserCheckPayload = {
  name?: string;
  email?: string;
  gender?: string;
  phone_number?: string;
  password?: string;
};
