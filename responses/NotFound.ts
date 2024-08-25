export const apiResponseNotFound = (message: string) => {
  return {
    meta: {
      message,
      status: "error",
      code: 404,
    },
    data: null,
  };
};
