import { PrismaClient } from "@prisma/client";
import {
  IUserCheckPayload,
  IUserCreatePayload,
  IUserLoginPayload,
} from "../../domain/entities/request.type";
import { IUserRepository } from "../../domain/repository/users.repository.type";

const prisma = new PrismaClient();

// export const UserRepository: IUserRepository = {
//   getAllUserRepository: async () => {
//     const usersData = await prisma.users.findMany();

//     return usersData;
//   },
//   getOneUserRepository: async (id: number) => {
//     const usersData = await prisma.users.findUnique({
//       where: {
//         id: id,
//       },
//     });

//     return usersData;
//   },

//   createUserRepository: async (payload: ICreateUserPayload) => {
//     const usersData = await prisma.users.create({
//       data: {
//         email: payload.email,
//         gender: payload.gender,
//         name: payload.name,
//         phone_number: payload.phone_number,
//       },
//     });

//     return usersData;
//   },
// };

export class UserRepository implements IUserRepository {
  async getAllUserRepository() {
    try {
      const usersData = await prisma.users.findMany();

      if (!usersData) {
        return null;
      }
      return usersData;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async getOneUserRepository(id: number) {
    try {
      const userData = await prisma.users.findUnique({
        where: {
          id: id,
        },
      });

      if (!userData) {
        return null;
      }

      return userData;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async createUserRepository(payload: IUserCreatePayload) {
    try {
      const createUserData = await prisma.users.create({
        data: {
          name: payload.name,
          email: payload.email,
          gender: payload.gender,
          password: payload.password,
          phone_number: payload.phone_number,
        },
      });

      if (!createUserData) {
        return null;
      }

      return createUserData;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async loginUserRepository(payload: IUserLoginPayload) {
    try {
      const getOneUserData = await prisma.users.findUnique({
        where: {
          phone_number: payload.phone_number,
        },
      });

      if (!getOneUserData) {
        return null;
      }

      return getOneUserData;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async checkUserRepository(payload: IUserCheckPayload) {
    try {
      const checkUserData = await prisma.users.findFirst({
        where: {
          OR: Object.keys(payload).map((key) => ({
            [key]: payload[key as keyof IUserCheckPayload],
          })),
        },
      });

      if (!checkUserData) {
        return null;
      }

      return checkUserData;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  // async createUserRepository(payload: ICreateUserPayload) {
  //   const usersData = await prisma.users.create({
  //     data: {
  //       email: payload.email,
  //       gender: payload.gender,
  //       name: payload.name,
  //       phone_number: payload.phone_number,
  //     },
  //   });

  //   return usersData;
  // }
}
