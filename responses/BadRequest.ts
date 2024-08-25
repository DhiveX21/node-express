export const apiResponseBadRequest = (message: string) => {
  return {
    meta: {
      message: message,
      status: "error",
      code: 400,
    },
    data: null,
  };
};
