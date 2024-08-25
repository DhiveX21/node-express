export type IUser = {
  id: number;
  name: string;
  email: string;
  gender: string;
  phone_number: string;
  password: string;
  created_at: Date | null;
  date_modified: Date | null;
};
