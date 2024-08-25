export const apiResponseUnAuthorized = (message: string) => {
  return {
    meta: {
      message: message,
      status: "error",
      code: 401,
    },
    data: null,
  };
};
