interface AuthSliceType {
  status: boolean;
  userInfo: UserType | null;
}

type UserType = {
  _id: string;
  email: string;
  username: string;
};

type RegisterDataType = {
  username: string;
  email: string;
  password: string;
};

type LoginDataType = Omit<RegisterDataType, "username">;

type ButtonType = {
  children: React.ReactNode;
  handler?: () => void;
  type: "button" | "submit" | "reset";
  className?: string;
};

export type {
  AuthSliceType,
  UserType,
  LoginDataType,
  RegisterDataType,
  ButtonType,
};
