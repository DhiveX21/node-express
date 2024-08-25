export const apiResponseConflict = (message: string) => {
  return {
    meta: {
      message: message,
      status: "error",
      code: 409,
    },
    data: null,
  };
};
