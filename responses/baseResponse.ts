export const baseResponseSuccess = ({
  message,
  status,
  code,
  data,
}: {
  message: string;
  status: "success" | "error";
  code: number;
  data: any;
}) => {
  return {
    meta: {
      message,
      status,
      code,
    },
    data,
  };
};
