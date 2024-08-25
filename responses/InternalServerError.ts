export const apiResponseInternalServerError = () => {
  return {
    meta: {
      message: "Internal Server Error",
      status: "error",
      code: 500,
    },
    data: null,
  };
};
