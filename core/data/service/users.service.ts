import {
  IUserCheckPayload,
  IUserCreatePayload,
  IUserLoginPayload,
} from "../../domain/entities/request.type";
import { IUserServices } from "../../domain/service/users.service.type";
import NotFound from "../exception/NotFound";
import Conflict from "../exception/Conflict";
import Unauthorized from "../exception/Unauthorized";
import { UserRepository } from "../repository/users.repository";
import { Encrypt } from "../helpers/encrypt";

export default class UserService implements IUserServices {
  private repo!: UserRepository;

  constructor(repo: UserRepository) {
    this.repo = repo;
  }

  async getAllUserService() {
    const getAllData = await this.repo.getAllUserRepository();

    if (!getAllData) {
      throw new NotFound("User Not Found");
    }

    return getAllData;
  }

  async getOneUserService(id: number) {
    const getOneData = await this.repo.getOneUserRepository(id);

    if (!getOneData) {
      throw new NotFound("User Not Found");
    }

    return getOneData;
  }

  async createUserService(payload: IUserCreatePayload) {
    const encryptedPassword = await Encrypt.encryptPassword(payload.password);

    const checkUserData = await this.repo.checkUserRepository({
      phone_number: payload.phone_number,
      email: payload.email,
    });

    if (!checkUserData) {
      const createData = await this.repo.createUserRepository({
        ...payload,
        password: encryptedPassword,
      });

      return createData;
    } else {
      throw new Conflict("Phone Number / Email is already registered.");
    }
  }
  async checkUserService(payload: IUserCheckPayload) {
    const checkUserData = await this.repo.checkUserRepository(payload);

    if (!checkUserData) {
      throw new NotFound("User Not Found");
    }

    return checkUserData;
  }
  async loginUserService(payload: IUserLoginPayload) {
    const loginUserData = await this.repo.loginUserRepository(payload);
    if (loginUserData) {
      const isPasswordValid = await Encrypt.validatePassword(
        payload.password,
        loginUserData?.password
      );

      if (isPasswordValid) {
        return loginUserData;
      } else {
        throw new Unauthorized("Wrong Password");
      }
    } else {
      throw new NotFound("User Not Found");
    }
  }
}
